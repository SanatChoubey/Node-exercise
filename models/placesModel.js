const mongoose =  require('mongoose');
// const Schema = new mongoose.Schema();

const placeSchema = new mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});
placeSchema.index({ location: '2dsphere' });
module.exports= mongoose.model('place', placeSchema);
