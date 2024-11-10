import mongoose from "mongoose";

const BatchSchema = new mongoose.Schema({
    total: Number,
    lastClientIdentifier: Number,
    source: String,
    hashtag: String,
    batchId: String
})

export const BatchModel = mongoose.model('batches', BatchSchema)