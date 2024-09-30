const express = require('express')
const app = express()
const port = 3000  //Variavel ambiente

const path = require("path")
const basepath = path.join(__dirname, 'Aula1')

app.get('/users/:id', (req, res) => { //get=retorna um valor
    const id = req.params.id //resgatar parametros da url
    console.log(`Estamos buscando o usuario: ${id}`) //resgatar o usuario do banco
    res.sendFile(`${basepath}/users.html`)//sendFile=Transferir arquivos. basepath=especifica a pasta raiz.
})

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)

})

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
})  