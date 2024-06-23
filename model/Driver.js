const mongoose = require('mongoose');

 
const DriverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  },
  routes: [
    {
      date: {
        type: Date,
        required: true
      },
      path: [
        {
          lat: {
            type: Number,
            required: true
          },
          lng: {
            type: Number,
            required: true
          }
        }
      ]
    }
  ]
});

 
const Driver = mongoose.model('Driver', DriverSchema);

 
module.exports = Driver;
