const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const todoRouter = require("./Router/todoRouter")
const app = express()
const cors = require("cors")

//local environment

dotenv.config()
//mongoose connection

const main = async()=>{
    try{
        await mongoose.connect(process.env.DATA_URL)
        console.log("atlas is connected")
    }catch(e){
        console.log(e)
    }
    
    
}
main()
    
app.use(cors())
//middle-ware
app.use("/todo", todoRouter)
app.get("/todo", (req, res)=>{
    res.send("I AM COMING")
})

app.listen(process.env.PORT?process.env.PORT:5000, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server is up")
    }
})