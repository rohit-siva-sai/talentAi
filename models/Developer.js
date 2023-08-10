const mongoose = require("mongoose");

const developerSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    photoURL: { type: String },
    achievement: { type: String },
    approved: { type: Boolean },
    city: { type: String },
    country: { type: String },
    disabled: { type: Boolean },
    experience: { type: String },
    github: { type: String },
    language: { type: String },
    linkedin: { type: String },
    message: { type: String },
    phone: { type: String },
    portfolio: { type: String },
    remoteexperience: { type: String },
    role: { type: String },
    timestamp: { type: String },
    timezone: { type: String },
    userImage: { type: String },
    userName: { type: String, required: true },
    verified: { type: Boolean },
  },
  { timestamps: true, collection: "developer" }
);

mongoose.models = {};

export default mongoose.models.Developer ||
  mongoose.model("Developer", developerSchema);
