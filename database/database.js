const pg = require('pg')

var uri_local = 'postgres://postgres:Lm07112002@localhost:5432/teste'

const database = new pg.Client(process.env.DATABASE_URL || uri_local)
database.connect() //AGUARDANDO CONEXÂO DO BANCO DE DADOS

module.exports = database