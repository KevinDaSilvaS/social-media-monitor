import axios from "axios"
import { TwitterApiResponse } from "./types"
import { envs } from "src/env"

export class TwitterClient {
    /**
     * fetchData
     */
    public async fetchData(hashtag: string): Promise<TwitterApiResponse> {
        const url = envs.twitterApiUrl
        const { data } = await axios.get(`${url}/2/tweets/search/recent?query=${hashtag}`)
        return data
    }
}