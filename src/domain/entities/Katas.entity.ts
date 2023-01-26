import mongoose from "mongoose";

export const KatasEntity = () => {

    let katasSchema = new mongoose.Schema(
        {
            Name: String,
            Description: String,
            Level: Number,
            Date: { type: Date, default: Date.now },
            Valoration: Number
        }
    )

    return mongoose.model('Katas', katasSchema)
}