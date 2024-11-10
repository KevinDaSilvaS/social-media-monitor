import axios from "axios"
import { TwitterApiResponse } from "./types"

export class TwitterClient {
    /**
     * fetchData
     */
    public async fetchData(hashtag: string): Promise<TwitterApiResponse> {
        const { data } = await axios.get(`${process.env.TWITTER_API_URL}/2/tweets/search/recent?query=${hashtag}`)
        return data
    }
}