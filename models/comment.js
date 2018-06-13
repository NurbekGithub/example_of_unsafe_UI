import mongoose from "mongoose";

const schema = new mongoose.Schema({
    comment: {
        type: String
    }
})

export default mongoose.model('comment', schema);