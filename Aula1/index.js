const express = require('express')
const app = express()
const port = 3000  //Variavel ambiente

const path = require("path")
const users = require('/users')

const basepath = path.join(__dirname) 

app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
})  