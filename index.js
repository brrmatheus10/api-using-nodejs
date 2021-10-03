
//Armazendo as dependencias em variáveis
const express = require('express')
const morgan = require('cors')
const cors = require('cors')
const bodyParser = require('body-parser')

//Dependência express armazenda no nosso app
const app = express()

//Utilizando o express armazenado no app para usar as outras dependências
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

//Criando array para utilização de um banco de dados para testes
let testDatabase = [
    { '1': { Nome: 'Lucas', Idade: '10' } },
    { '2': { Nome: 'Pedro', Idade: '20' } },
    { '3': { Nome: 'Caio', Idade: '30' } }
]

//Criando primeira rota para mostrar banco de dados 
app.get('/', (req, res) => {
    return res.json(testDatabase)
})

//Vai ouvir essa aplicação na porta 8080
app.listen(8080, () => {
    console.log('Hello World')
})