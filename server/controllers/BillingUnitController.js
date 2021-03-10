const express = require('express')

const router = express.Router()

var Billingunit = require('../models/BillingUnitModel')

router.get('/', async (req, res, next) => {
  //   console.log(BillingUnits)
  try {
    const data = await Billingunit.find({})
    console.log(data)
  } catch (err) {
    console.log(err)
  }
  res.status(200).json('Hi')
})

router.post('/', (req, res, next) => {
  console.log(req.body)
  res.send('Working')
})

module.exports = router
