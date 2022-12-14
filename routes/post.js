const express = require("express")
const PostModel = require("../models/postSchema")
const router = express.Router()
const body_parser = require("body-parser")
router.use(body_parser.json())
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
const cloudinary = require("../cloudinary/cloudinary")

router.get("/posts", async (req, res) => {
    try {
        const posts = await PostModel.find()
        res.status(201).json( posts )
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
})

router.post("/createpost",
     async (req, res) => {

        try {
           
            const { author,location,desc} = req.body
            const file = req.files.file.tempFilePath
            const img = await cloudinary.uploader.upload(file,{
                folder : "posts"
            })
            const post = await PostModel.create({
                author : author,
                location : location,
                likes : Math.floor(Math.random()*100),
                desc : desc,
                postImage : img.secure_url,
                date : new Date().toDateString()
            })
            res.status(201).json({ message : "post created successfully" })
        } catch (error) {
            res.json({
                status: 500,
                message: error.message
            })
        }
    })

router.get("*",(req,res)=>{
    res.json({

        message :  "404 not found"
    })
})    
module.exports = router
