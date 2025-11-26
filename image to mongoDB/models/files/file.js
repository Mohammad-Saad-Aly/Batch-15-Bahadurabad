import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    imageURL: String
})

const file = mongoose.model('abcd', fileSchema)

export default file