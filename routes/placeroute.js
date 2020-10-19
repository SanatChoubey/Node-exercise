const express = require('express');
const { createLocation, getPlacesLocation } =  require('../controller/placescontroller')
const router = express.Router();

router
  .route('/')
  .post(createLocation)
  .get(getPlacesLocation)

module.exports = router;
  