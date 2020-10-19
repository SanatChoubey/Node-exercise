const express = require('express');
const { 
  getFlightDetails,
  createFlightList,
  updateFlight
 } = require('../controller/flightController')
const router =  express.Router()

router
  .route('/flight')
  .get(getFlightDetails)
  .post(createFlightList)
  .put(updateFlight)
module.exports= router;
