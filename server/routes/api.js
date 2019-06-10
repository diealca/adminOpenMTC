const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb://adminOpenMTC:User1@localhost/openMTC"

mongoose.set('useCreateIndex',true)

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

router.get('/usuarios',(req,res)=>{
    User.find((error,users)=>{
        if(error){
            res.status(401).send(error)
        }else{
            res.status(200).send(users)
        }
    })
})

router.put('/usuarios/:id',(req,res)=>{
    let userData = req.body
    console.log(userData)
    User.findById(req.params.id,(error,user)=>{
        if(error){
            console.log(error)
            res.status(401).send(error)
        }
        else{
            user.role=userData.role
            user.email=userData.email
            user.user = userData.user
            
            if(userData.role==='administrador'){
                user.permisos=[]
            }
            user.save((error,updatedUser)=>{
                if(error){
                    console.log(error)
                    res.status(401).send(error)
                } else {
                    res.status(200).send(updatedUser)
                }
            })
        }
    })
})

router.get('/usuarios/:id',(req,res)=>{
    let userData = req.body
    User.findById(req.params.id,(error,user)=>{
        if(error){
            console.log(error)
            res.status(401).send(error)
        }
        else{
            res.status(200).send(user)
        }
    })
})

router.post('/usuarios',(req,res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
            res.status(401).send(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

router.delete('/usuarios/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id,(error,user)=>{
        if(error){
            console.log(error)
            res.status(401).send(error)
        }
        else{
            const response = {
                message: "Usuario eliminado con exito",
                id: user._id
            }
            res.status(200).send(response)
        }
    })
})

router.put('/usuarios/:id',(req,res)=>{
    let userData = req.body
    console.log(userData)
    User.findById(req.params.id,(error,user)=>{
        if(error){
            console.log(error)
            res.status(401).send(error)
        }
        else{
            user.role=userData.role
            user.email=userData.email
            user.user = userData.user
            if(userData.password!==""){
                user.password = userData.password
            }
            if(userData.role==='administrador'){
                user.permisos=[]
            }
            user.save((error,updatedUser)=>{
                if(error){
                    console.log(error)
                    res.status(401).send(error)
                } else {
                    res.status(200).send(updatedUser)
                }
            })
        }
    })
}).select("+password")

router.put('/usuarios/:id/password',(req,res)=>{
    let userData = req.body
    console.log(userData)
    User.findById(req.params.id,(error,user)=>{
        if(error){
            console.log(error)
            res.status(401).send(error)
        }
        else{
            user.password=userData.password
            user.save((error,updatedUser)=>{
                if(error){
                    console.log(error)
                    res.status(401).send(error)
                } else {
                    const response = {
                        message: "Contraseña actulizada con exito",
                        id: updatedUser._id
                    }
                    res.status(200).send(response)
                }
            })
        }
    }).select("+password")
})


router.post('/login',(req,res)=>{
    let userData =  req.body

    User.findOne({user:userData.user},(error,user)=>{
        if(error){
            console.log(error)
            res.status(401).send(error)
        }else{
            if(!user){
                res.status(401).send('Usuario o contraseña invalidos')
            }else
            if(user.password!==userData.password){
                console.log(userData.password)
                console.log(user)
                res.status(401).send('Usuario o contraseña invalidos')
            }else {
                let payload={subject:user._id}
                let token = jwt.sign(payload,'secret1')
                let sendUser={
                    "user": user.user,
                    "role" : user.role,
                    "token": token
                }
                res.status(200).send(sendUser)
            }
        }
    }).select("+password")
})

router.get('/dispositivos',(req,res)=>{
    Device.find((error,dispositivos)=>{
        if(error){
            res.status(401).send(error)
        }else{
            res.status(200).send(dispositivos)
        }
    })
})

router.get('/dipositivos/:id',(req,res)=>{
    User.findById(req.params.id,(error,device)=>{
        if(error){
            console.log(error)
            res.status(401).send(error)
        }
        else{
            res.status(200).send(device)
        }
    })
})

router.post('/dispositivos',(req,res)=>{
    let deviceData = req.body
    let device = new Device(deviceData)
    device.save((error,registeredDevice)=>{
        if(error){
            console.log(error)
            res.status(401).send(error)
        } else {
            res.status(200).send(registeredDevice)
        }
    })
})

router.put('/dispisitivos/:id',(req,res)=>{
    let dispositivoData = req.body
    User.findById(req.params.id,(error,dispisitivo)=>{
        if(error){
            console.log(error)
            res.status(401).send(error)
        }
        else{
            dispisitivo.descripcion=dispositivoData.descripcion
            dispisitivo.save((error,updatedDispositivo)=>{
                if(error){
                    console.log(error)
                    res.status(401).send(error)
                } else {
                    res.status(200).send(updatedDispositivo)
                }
            })
        }
    })
})

router.delete('/dispositivos/:id',(req,res)=>{
    User.findByIdAndRemove(req.params.id,(error,dispisitivo)=>{
        if(error){
            console.log(error)
            res.status(401).send(error)
        }
        else{
            const response = {
                message: "Dispositivo eliminado con exito",
                id: dispisitivo._id
            }

            res.status(200).send(response)
        }
    })
})




router.get('/info',verifyToken, (req,res)=>{
    
})


module.exports = router