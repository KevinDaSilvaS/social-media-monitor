import { Result } from "./types";

export interface Mapper {
    data
    hashtag
    mapData(): Result
    getAndSetData(params): void
}