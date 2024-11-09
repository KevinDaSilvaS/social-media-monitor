import { Source } from "src/clients/client-enum"

export type Batch = {
    total: number
    lastClientIdentifier: number
    source: Source
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