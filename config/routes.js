const express = require('express')
const routes = express.Router()

//Criando array para utilização de um banco de dados para testes
let testDatabase = [
    { '1': { Nome: 'Lucas', Idade: '10' } },
    { '2': { Nome: 'Pedro', Idade: '20' } },
    { '3': { Nome: 'Caio', Idade: '30' } }
]
//API
routes.get('/', (req, res) => {
    return res.json(testDatabase)
})

routes.post('/add', (req, res) => {
    const body = req.body
    const id = req.body.id

    testDatabase.forEach(testDatabase => {
        if (testDatabase.id == id) {
            console.log("Id igual")
        }

    });

    testDatabase.push(body)
    return res.send(testDatabase)

})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let dbfilter = testDatabase.filter(item => {
        if (!item[id])
            return item
    })

    testDatabase = dbfilter

    return res.send(dbfilter)
})



module.exports = routes