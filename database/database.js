const pg = require('pg')



const database = new pg.Client(process.env.DATABASE_URL)

module.exports = database