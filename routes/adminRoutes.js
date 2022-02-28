const express = require('express')
const Router = express.Router()

Router.get('/', (req,res)=>{
    res.render('index')
})

Router.get('/posts', (req,res)=>{
    res.render('posts')
})

module.exports = Router