const mongoose = require('mongoose')
const OtheSchema =  new mongoose.Schema({
  type: String,
  close: Array
})
const FlightScheme =  new mongoose.Schema({
  code: {
    type: String,
  },
  lat:  {
    type: String,
  },
  lon:  {
    type: String,
  },
  name :  {
    type: String,
  },
  city :  {
    type: String,
  },
  state:  {
    type: String,
  },
  country:  {
    type: String,
  },
  woeid :  {
    type: String,
  },
  tz:  {
    type: String,
  },
  phone:  {
    type: String,
  },
  type :  {
    type: String,
  },
  email:  {
    type: String,
  },
  url:  {
    type: String,
  },
  runway_length :  {
    type: String,
  },
  elev: {
    type: String,
  },
  icao:  {
    type: String,
  },
  direct_flights:  {
    type: String,
  },
  carriers:  {
    type: String,
  },
  status: {
    type:Array
  },
  otherField : {
    type: OtheSchema
  }
})
module.exports = mongoose.model('flight',FlightScheme)