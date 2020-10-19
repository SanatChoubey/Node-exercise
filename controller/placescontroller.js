const { default: placesModel } = require('../models/placesModel');
const PlaceModal = require('../models/placesModel');

// create location

exports.createLocation = (req, res)=>{
  
  // console.log(location)
  PlaceModal.create({
    name: req.body.name,
    location: {
      type: 'Point',
      coordinates :req.body.location
    }
  }).then((data)=>{
    res.send({
      data
    })
  }).catch((e)=>{
    res.send(e)
  })
  
}
exports.getPlacesLocation = (req, res) =>{
  PlaceModal.find({location:{
    $near: {
      $geometry: {
       type: "Point" ,
       coordinates: [ 79.8756511 , 23.1356668 ]
      },
      $maxDistance: 500000,
      $minDistance: 0
    }
    }}).then((data)=>{
    res.send(data)
  }).catch((e)=>{
    res.send(e)
  })
}