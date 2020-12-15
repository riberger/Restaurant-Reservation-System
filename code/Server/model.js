'use strict'; // all variables must be declared

var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  time: {
    type: String,
    required: 'Reservation time'
  },
  monday: {
    type: String,
    required: 'Monday Reservations'
  },
  
  tuesday: {
    type: String,
    required: 'Tuesday Reservation'
  },
  wednesday: {
    type: String,
    required: 'Wednesday Reservation'
  },
  thursday: {
    type: String,
    required: 'Thursday Reservation'
  },
  friday: {
    type: String,
    required: 'Friday Reservation'
  },
  saturday: {
    type: String,
    required: 'Saturday Reservation'
  },
  sunday: {
    type: String,
    required: 'Sunday Reservation'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
    }],
  }
});

module.exports = mongoose.model('Items', ItemSchema);

