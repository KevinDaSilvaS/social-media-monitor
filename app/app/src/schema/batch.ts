import mongoose from "mongoose";

export const BatchSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
});