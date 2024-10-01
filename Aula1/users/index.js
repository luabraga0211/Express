const express = require('express')
const router = express.Router()
const path = require("path")
const basePath = path.join(__dirname)



//ler o body
    router.use(
    express.urlencoded({ //Converter para formato URL
        extentded: true, // copiar parametros dos objetos
    }), 
)

router.use(express.json())

var checkAuth = function (req, res, next) {
    req.authStatus = true

    if (req.authStatus) {
        console.log('Está logado, pode continuar')
        next()
    }   else {
        console.log('Não esta logado, faça o login para continuar')
    }
}

    router.use(checkAuth)
    
    router.get('/add', (req, res) =>{
        res.sendFile(`${basePath}/form.html`)
    })
    router.post('/save', (req, res) =>{
        console.log(req.body)
        const name = req.body.name
        const email = req.body.email


        console.log(name)
        console.log(email)
    })

    router.get('/:add', (req, res) => { //get=retorna um valor
    const add = req.params.add //resgatar parametros da url
    console.log(`Estamos buscando o usuario: ${add}`) //resgatar o usuario do banco
    res.sendFile(`${basepath}/form.html`)//sendFile=Transferir arquivos. basepath=especifica a pasta raiz.
})

module.exports = router //exportando o modulo do router no codigo