const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    number:Number,
},{timestamps:true})


const user = mongoose.model("uses",userSchema);

module.exports = user