const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb://adminOpenMTC:User1@localhost/openMTC"


mongoose.connect(db, err=>{
    if (err){
        console.error('Error:' + err)
    } else{
        console.log('Connected to mongodb')
    }
})

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token == 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secret1')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

router.get('/',(req,res)=>{
    
})

router.post('/register',(req,res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login',(req,res)=>{
    let userData =  req.body

    User.findOne({user:userData.user},(error,user)=>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('Usuario o contraseña invalidos')
            }else
            if(user.password!==userData.password){
                res.status(401).send('Usuario o contraseña invalidos')
            }else {
                let payload={subject:user._id}
                let token = jwt.sign(payload,'secret1')
                res.status(200).send({token})
            }
        }
    })
})

router.get('/info',verifyToken, (req,res)=>{
    
})

module.exports = router