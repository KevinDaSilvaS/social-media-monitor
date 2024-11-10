import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
    timestamp: Date,
    data: String,
    batchId: String
})

export const RegisterModel = mongoose.model('registers', RegisterSchema)