const express = require("express")
const Router = express()
const todoModel = require("../models/todo") 


Router.use(express.urlencoded())
Router.use(express.json())

const date = new Date()
const todayDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
Router.get("/today",async (req, res)=>{
    try{
        const data = await todoModel.find({date:todayDate}).sort({id:-1})
        res.status(200).json(data)
    }
    catch(e){
        console.log(e)
    }
})
Router.get("/all",async (req, res)=>{
    try{
        const data = await todoModel.find()
        res.status(200).json(data)
    }
    catch(e){
        console.log(e)
    }
})
Router.post("/today",async (req, res)=>{
    try{
        const data = await todoModel.create({
            todo : req.body.todo,
            date : todayDate 
        })
        res.json(data)
    }
    catch(e){
        console.log(e)
    }
})

Router.put("/today/:id",async (req, res)=>{
    try{
        const data = await todoModel.updateOne({_id:req.params.id}, {
            todo:req.body.todo
        })
        res.json(data)
    }
    catch(e){
        console.log(e)
    }
})
Router.delete("/today/:id",async (req, res)=>{
    try{
        const data = await todoModel.deleteOne({_id:req.params.id})
        res.json(data)
    }
    catch(e){
        console.log(e)
    }
})

module.exports = Router