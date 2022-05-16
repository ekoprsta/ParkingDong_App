if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const express = require('express')
var cors = require('cors')
const app = express()
const route = require('./routers/index')
const Port = process.env.PORT || 3003

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', route)

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
})