const mongoose = require("mongoose")
const {model, Schema} = mongoose

const todoSchema = Schema({
    todo :{type:String},
    date : {type:String}
}, {timestamps:true})

const todoModel = model("data", todoSchema)
module.exports = todoModel;