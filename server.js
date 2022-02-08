const express = require('express') 
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false}))
app.use(express.Router())
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use('/', require('./routes/Routes') )


app.listen(4000, ()=>{
    console.log("Servidor rodando na porta 4000")
})