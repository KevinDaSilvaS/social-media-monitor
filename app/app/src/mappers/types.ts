import { Source } from "src/clients/client-enum"

export type Batch = {
    total: number
    lastClientIdentifier: number
    source: Source,
    hashtag: string
}

export type Register = {
    timestamp: Date
    data: string,
    batchId: string
}

export type Result = {
    batch: Batch,
    registers: Register[]
}