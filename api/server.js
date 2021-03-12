require('dotenv').config()
// helps link files found in node
const express = require('express');
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')

const UserRouter = require('./users/users-router.js')
const server = express()

// middle ware

server.use(express.json())
server.use(morgan('dev'))
// finds static assets -> tells express where our static assets are serverd from
server.use(express.static(path.join(__dirname, 'client/build')))


if(process.env.NODE_ENV === 'development'){
  const cors = require('cors')
  server.use(cors())
}

server.use("/api/users", UserRouter)

server.get('/api/hello', (req,res) => {
  res.json({message: 'hello world hoee'})
})

server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})


module.exports = server;

