const express = require('express') 
const bodyparser = require('body-parser')
const cors = require('cors')


require('dotenv/config')

const app = express()
const port = process.env.PORT || 4000


app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false}))
app.use(express.Router())
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use('/', require('./routes/Routes') )


app.listen(port,()=>{
    console.log('rodando')
})