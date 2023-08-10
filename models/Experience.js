const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    
    companyName: { type: String },
    companyWebsite: { type: String },
    currentlyWorking: { type: String },
    experienceSummery: { type: String },
    position: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    email: { type: String },
  },
  { timestamps: true, collection: "experience" }
);

// const Experience = mongoose.model("Experience", experienceSchema);

// module.exports = Experience;

export default mongoose.models.Experience ||
  mongoose.model("Experience", experienceSchema);
