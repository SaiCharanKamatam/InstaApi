require("dotenv").config()
const mongoose = require("mongoose")

const app = require("./app")
mongoose.set('strictQuery', true)

const main =  async ()=>{
    await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.udsyusl.mongodb.net/?retryWrites=true&w=majority`)
    console.log("db connected");
    app.listen(process.env.PORT,()=>console.log(`listening ${process.env.PORT}`))
}

main()