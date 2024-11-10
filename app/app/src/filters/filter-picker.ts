import { Filter } from "./filter-enum"
import { mean, median, mode } from "./filters"

const filters = {
    [Filter.Mean]: mean,
    [Filter.Median]: median,
    [Filter.Mode]: mode,
}

export = filters
