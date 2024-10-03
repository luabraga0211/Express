const express = require('express');
const router = express.Router();
const path = require("path");
const basePath = path.join(__dirname);

// Ler o body
router.use(
    express.urlencoded({ // Converter para formato URL
        extended: true, // Correção aqui
    })
);

router.use(express.json());

// Aplica Estética (css)
router.use(express.static('public'));

var checkAuth = function (req, res, next) {
    req.authStatus = true;

    if (req.authStatus) {
        console.log('Está logado, pode continuar');
        next();
    } else {
        console.log('Não está logado, faça o login para continuar');
        res.status(401).send('Não autorizado');
    }
};

// Rota acessível sem autenticação
router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/form.html`);
});

// Rota POST para salvar o usuário
router.post('/save', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;

    console.log(name);
    console.log(email);
    
    // Enviar uma resposta
    res.send('Usuário cadastrado com sucesso!');
});

// Rota para buscar um usuário
router.get('/:add', (req, res) => {
    const add = req.params.add; // resgatar parametros da url
    console.log(`Estamos buscando o usuário: ${add}`);
    res.sendFile(`${basePath}/users.html`); // sendFile=Transferir arquivos. basepath=especifica a pasta raiz.
});

module.exports = router; // exportando o módulo do router