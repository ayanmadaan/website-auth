require('./db')
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const BillingUnitRoutes = require('./controllers/BillingUnitController')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const PORT = process.env.PORT || 8000

// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')))

// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
// })

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

app.use('/getRegion', BillingUnitRoutes)
