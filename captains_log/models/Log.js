////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose using object destructuring
const mongoose = require('./connection');

const { Schema, model } = mongoose;

const logSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  entry: {
    type: String,
    required: true
  },
  shipIsBroken: {
    type: Boolean,
    default: true
  }
}, 
{
  timestamps: true  
});

const Log = model('Log', logSchema);

module.exports = Log;