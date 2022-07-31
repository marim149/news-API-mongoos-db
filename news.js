const joi = require('joi')
const bcryptjs = require('bcryptjs')
const validator = require('validator')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const NewsSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        minLength:6,
        trim:true
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('Email is invalid')
            }
        }
    },
    Password:{
        type:String,
        required:true,
        trim:true,
        minLength:6,
        validate(value){
            let strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
            if(!strongPassword.test(value)){
                throw new Error('Password must include ..........')
            }
        }

    },
    Department:{
        type:String,
        required:true,
        trim:true
    },
    Massege:{
        type:String,
        required:true,
        minlength:20

    },
    
})
module.exports = mongoose.model('News',NewsSchema)