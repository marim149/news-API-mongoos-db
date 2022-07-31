const joi = require('joi');
const regesterValidation = data =>{
    const schema = {
        Name:joi.string().min(6).required(),
    Email:joi.string().required(),
    Password:joi.string().min(6).required(),
    Department:joi.string().required(),
    Massege:joi.string().min(20).required()

    }
    return joi.validate(data , schema)
} 
const loginValidation = data =>{
    const schema = {
    Email:joi.string().required(),
    Password:joi.string().min(6).required(),

    }
    return joi.validate(data , schema)
}


module.exports.regesterValidation = regesterValidation;
module.exports.loginValidation = loginValidation;