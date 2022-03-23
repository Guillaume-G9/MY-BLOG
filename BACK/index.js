const mongoose = require("mongoose")
const Post = require("./post")
const express = require("express")
const app = express()

mongoose.connect("mongodb+srv://admin:azerazer@firstproject.6ql49.mongodb.net/blog")

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/posts', (req, res) => {
    Post.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

async function run() {
    const user = await Post.create({ user: "Robert", title: "Lorem ipsum dolor sit amet consectetur", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."})
    // const user = new User({ name : "Robert", age: 25 })
    // await user.save()
    console.log(user)
    
}

app.listen(5000)