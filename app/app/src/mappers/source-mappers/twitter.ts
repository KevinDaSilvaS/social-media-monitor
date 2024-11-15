import { TwitterApiResponse } from "src/clients/types";
import { Mapper } from "../mapper";
import { Batch, Result } from "../types";
import { TwitterClient } from "src/clients/twitter-client";
import { Source } from "src/clients/client-enum";
import { v4 as uuidv4 } from 'uuid';

export class TwitterMapper implements Mapper {
    data: TwitterApiResponse;
    hashtag: string

    public async getAndSetData(params) {
        this.hashtag = params.hashtag
        this.data = await new TwitterClient().fetchData(this.hashtag)
    }
    
    public mapData(): Result {
        const batch: Batch = {
            total: this.data.meta.result_count,
            lastClientIdentifier: this.data.meta.oldest_id,
            source: Source.Twitter,
            hashtag: this.hashtag,
            batchId: uuidv4()
        }

        const registers = this.data.data.map(tweet => ({
            timestamp: tweet.created_at,
            data: tweet.text,
            batchId: batch.batchId
        }))

        return {
            batch,
            registers
        } as Result
    }
    
}