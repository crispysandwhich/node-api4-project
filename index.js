require('dotenv').config()
// helps link files found in node
const path = require('path')
const express = require('express')

const server = express()

// middle ware
server.use(express.json())
// finds static assets -> tells express where our static assets are serverd from
server.use(express.static(path.join(__dirname, 'client/build', 'index.html')))

console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
  const cors = require('cors')
  server.use(cors())
}

server.get('/api/hello', (req,res) => {
  res.json({message: 'hello world hoee'})
})

server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})


const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
  console.log('we are lising on', PORT)
})

