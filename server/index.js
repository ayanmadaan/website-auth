require('./db')
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const BillingUnitRoutes = require('./controllers/BillingUnitController')

const app = express()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')

  next()
})

const PORT = process.env.PORT || 8000

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')))

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

app.use('/getRegion', BillingUnitRoutes)
