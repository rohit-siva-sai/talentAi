const mongoose = require('mongoose');

const identitySchema = new mongoose.Schema({
 
  ethnicity: [{ type: String }],
  gender: { type: String },
  pronouns: { type: String },
  email: { type: String },
}, { timestamps: true });

const Identity = mongoose.model('Identity', identitySchema, 'identity');

module.exports = Identity;
