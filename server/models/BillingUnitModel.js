const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Billingunit = new Schema({
  unit: { type: String },
  region: { type: String },
})

module.exports = mongoose.model('Billingunit', Billingunit)
