'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const contactSchema = Schema( {
  firstName: String,
  lastName: String,
  email: String,
  contactWhen: Date,
  meetingLocation: String,
  company: String,
  otherNotes: String
});

module.exports = mongoose.model('Contact',contactSchema);