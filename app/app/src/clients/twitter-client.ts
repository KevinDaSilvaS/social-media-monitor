import axios from "axios"
import { TwitterApiResponse } from "./types"

export class TwitterClient {
    /**
     * fetchData
     */
    public async fetchData(hashtag): Promise<TwitterApiResponse> {
        const { data } = await axios.get(`http://localhost:3001/2/tweets/search/recent?query=${hashtag}`)
        return data
    }
}