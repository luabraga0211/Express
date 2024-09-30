const express = require('express')
const app = express()
const port = 3000  //Variavel ambiente

const path = require("path")
const basepath = path.join(__dirname) 

//ler o body
app.use(
    express.urlencoded({ //Converter para formato URL
    extentded: true, // copiar parametros dos objetos

    }), 
)

app.use(express.json())

var checkAuth = function (req, res, next) {
    req.authStatus = true

    if (req.authStatus) {
        console.log('Está logado, pode continuar')
        next()
    }   else {
        console.log('Não esta logado, faça o login para continuar')
    }
}

    app.use(checkAuth)
    app.get('users/add', (req, res) =>{
        res.sendFile(`${basePath}/form.html`)
    })

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