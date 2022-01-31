const express = require('express')
const path = require('path');
const app = express()
const http = require('http');
const server = http.createServer(app);


const port = process.env.PORT || 3000

// app.use(express.static('public'))
// app.use('/', express.static('public'))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// testing 
 
  