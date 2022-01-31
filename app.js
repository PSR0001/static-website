const express = require('express')
const path = require('path');
const app = express()
const http = require('http');
const server = http.createServer(app);


const port = process.env.PORT || 3000

// app.use(express.static('public'))
app.use('/', express.static('public'))



server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// testing 
 
  