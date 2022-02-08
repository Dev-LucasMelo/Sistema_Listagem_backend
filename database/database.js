const pg = require('pg')

const database = new pg.Client ({
    user: 'vqlcexvauuzvbl',
    password: '5a0bc330017b8c2c4a034e4ddb81ede344f26afd396fcaaf2fd2b362d8c38b45',
    database: 'dbdg1mst4n7nma',
    port: 5432,
    host:'ec2-18-235-114-62.compute-1.amazonaws.com'
})

module.exports = database