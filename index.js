const express = require('express')
const app = express()
const port = 3000  //Variavel ambiente

const path = require("path")
const basepath = path.join(__dirname, 'Aula1')
const checkAuth = function(req,res,next){
    req.authStatus = true
    if(req.authStatus){
        console.log('Está logado, pode continuar')
    } else {
        console.log('Não está logado faça o login')
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)

})

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
})  