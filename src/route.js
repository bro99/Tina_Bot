const express = require('express')
const route = express.Router()
const QuestionController = require('../src/controllers/QuestionController')
const UserController = require('./controllers/UserController')


route.get('/', async (req, res) =>{
    // TODO OS CALCULOS OU REQUISIÇÔES PARA RENDERIZAR O QUE VOCÊ QUISER
   res.render('index')
})

route.get('/treinamento', async (req, res) =>{
    // QuestionController.create()
    const message = await QuestionController.index()
     res.render('treinamento', {message:message})
})

route.get('/cliente', async (req, res) =>{
    // QuestionController.create()
    const userData = await UserController.index()
    res.render('clientes', {userData:userData})
})



route.post('/treinamento', QuestionController.create)



route.post('/cliente', UserController.createUser)





module.exports = route