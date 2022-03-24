const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    user : String,
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    // createdAt: {
    //     type: Date,
    //     immutable: true,
    //     default: () => Date.now(),
    // },
    // updatedAt: {
    //     type: Date,
    //     default: () => Date.now(),
    // },
    uid : String,
})

const Post = mongoose.model("articles", postSchema)

module.exports = Post