// DEPENDENCIES 
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.port
console.log(PORT)

// DB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))



// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an AWESOME App about Breads!')
})
  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  
// Bakers
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// 404 Page wildcard no routes under this
app.get('*', (req, res) => {
  res.render('404')
})

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})