import mongoose from "mongoose";
const Schema = mongoose.Schema

const letterSchema = new Schema(
    {
        name: String,
        message: [{
            text: String,
            date: String,
            sender: String
        }]
    }
)

const Letter = mongoose.model('Letter', letterSchema)

export default Letter