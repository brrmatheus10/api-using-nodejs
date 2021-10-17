const routes = require('./config/routes')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

//Dependência express armazenda no nosso app
const app = express()

//Utilizando o express armazenado no app para usar as outras dependências
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(routes)

//Vai ouvir essa aplicação na porta 8080
app.listen(3000, () => {
    console.log('Started')
})