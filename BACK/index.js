const mongoose = require("mongoose")
const Post = require("./post")
const express = require("express")
const app = express()
let cors = require('cors')
const {v4:uuidv4} = require('uuid')

// mongoose.connect("mongodb+srv://<tescodesMONGODB>@firstproject.6ql49.mongodb.net/blog")

app.use(cors())

app.use(express.json())

app.get('/posts', (req, res) => {
    Post.find()
    .then((result) => {
        res.send(result)

    })
    .catch((err) => {
        console.log(err)
    })
})

let uidUser = false

function middleWare(req, res, next){
  if(req.body.uid === false){
    uidUser = uuidv4()
  } else {
    uidUser = req.body.uid
  }
  next()
}


app.post('/posts/create', middleWare, (req, res, next) => {

    const blogPost = new Post({
      ...req.body,
      // uid : uidUser
    });
    blogPost.save()

      .then(() => res.status(201).json({ message: 'Objet enregistré !', uid : uidUser}))
      .catch(error => res.status(400).json({ error }));

  });

app.delete('/posts/:id', (req, res, next) => {
  // console.log(req)
  Post.deleteOne({_id: req.params.id}).then(() => {
    res.send("DELETE Request Called")
  })

  })

app.put('/posts/:id', (req, res) => {

  Post.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
          .then(() => res.status(201).json({ message: 'Article modifié !'}))
          .catch(error => res.status(400).json({ error }));
      });

// async function run() {
//     const user = await Post.create({ user: "Bob", title: "Lorem ipsum dolor sit amet consectetur", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur rcitation."})
//     // const user = new User({ name : "Robert", age: 25 })
//     // await user.save()
//     console.log(user)
    
// }

app.listen(5000)