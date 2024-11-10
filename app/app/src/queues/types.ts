import { Source } from "src/clients/client-enum"
import { Filter } from "src/filters/filter-enum"

export type HashtagJob = {
    hashtag: string
    source: Source,
    filter: Filter
}