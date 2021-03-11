require('dotenv').config()
const express = require('express')

const server = express()

// middle ware
server.use(express.json())

console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
  const cors = require('cors')
  server.use(cors())
}

server.use('*', (req, res) => {
  res.send('<h1>succ beans</h2>')
})


const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
  console.log('we are lising on', PORT)
})

