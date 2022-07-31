const router = require ('express').Router()
const news = require('../models/news')
const verifi = require('./verifitoken')

router.get('/', verifi ,(req,res)=>{
res.send(req.news)

})
module.exports =router;