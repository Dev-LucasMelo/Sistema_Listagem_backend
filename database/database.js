const pg = require('pg')

const database = new pg.Client ({
    user: 'postgres',
    password: 'Lm07112002',
    database: 'teste',
    port: 5432,
    host:'localhost'
})

module.exports = database