const pg = require('pg')

var uri_local = 'postgres://postgres:Lm07112002@localhost:5432/teste'

const database = new pg.Client(process.env.DATABASE_URL)

module.exports = database