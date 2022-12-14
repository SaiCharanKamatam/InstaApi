const mongoose = require("mongoose")

const Schema = mongoose.Schema

const postSchema = new Schema({
    author : {type : String},
    location : {type : String},
    likes : {type : Number,default : 0},
    desc : {type : String},
    postImage : {type : String},
    date : String
})

const PostModel = mongoose.model("posts",postSchema)

module.exports = PostModel