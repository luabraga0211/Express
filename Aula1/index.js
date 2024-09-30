const express = require('express')
const app = express()
const port = 3000  //Variavel ambiente

const path = require("path")
const basepath = path.join(__dirname, 'Aula1')

app.get()

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)

})

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
})  