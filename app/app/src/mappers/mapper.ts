import { Result } from "./types";

export interface Mapper {
    data
    mapData(): Result
    getData(params): void
}