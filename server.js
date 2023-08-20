// DEPENDENCIES 
const express = require('express')
const app = express()

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.port
console.log(PORT)

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an AWESOME App about Breads!')
})
  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})