const express = require("express")
const postRouter = require("./routes/post")
const app = express()
const fileupload = require("express-fileupload")
app.use(fileupload({
    useTempFiles : true
}))
const cors = require('cors');
app.use(cors());

app.use("/",postRouter)
module.exports = app