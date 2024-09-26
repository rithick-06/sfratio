import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config();

export const connectDB = async () => {
    try {
        const MongoURI = process.env.MONGO_URI;
        if (!MongoURI) {
            throw new Error("mongo uri required.")
        }
        const conn = await mongoose.connect(MongoURI);
        console.log(`MongoDB connected at ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}