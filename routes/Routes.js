const express = require('express')
const Router = express.Router()
const database = require('../database/database')


    //GET 

    Router.get('/dados', (req, res) => { // ROTA COM OS DADOS RETORNADOS DA PROMISE "Dados.rows" = linhas do banco de dados "teste"  
        var sql = database.query('select * from users')
        sql.then((values) => {
            res.json(values.rows)
        })

    })


    Router.post('/finalizado', (req, res) => {

        database.query('insert into users (name,about,age,sex) values ($1,$2,$3,$4)', [req.body.name, req.body.about, req.body.age, req.body.sex])

        res.sendFile(__dirname + '/html/index.html')

    })


module.exports = Router