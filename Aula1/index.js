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
    app.post('/users/save', (req, res) =>{
        console.log(req.body)
        const name = req.body.name
        const age = req.body.age


        console.log(name)
        console.log(age)
    })

    app.get('/users/add', (req, res) => { //get=retorna um valor
    const add = req.params.add //resgatar parametros da url
    console.log(`Estamos buscando o usuario: ${add}`) //resgatar o usuario do banco
    res.sendFile(`${basepath}/form.html`)//sendFile=Transferir arquivos. basepath=especifica a pasta raiz.
})

app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)

})

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
})  