import axios from "axios"
import { TwitterApiResponse } from "./types"

export class TwitterClient {
    /**
     * fetchData
     */
    public async fetchData(hashtag: string): Promise<TwitterApiResponse> {
        const url = process.env.TWITTER_API_URL || 'http://localhost:3001'
        const { data } = await axios.get(`${url}/2/tweets/search/recent?query=${hashtag}`)
        return data
    }
}