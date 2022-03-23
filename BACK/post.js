const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    user : String,
    title: String,
    content: String,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
})

module.exports = mongoose.model("articles", postSchema)