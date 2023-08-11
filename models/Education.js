const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema(
  {
    degree: { type: String },
    education: { type: String },
    institute: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    email: { type: String,unique: true },
  },
  { timestamps: true, collection: "education" }
);

const Education = mongoose.model('Education', EducationSchema);

module.exports = Education;
// export default mongoose.models.Education || mongoose.model("Education", educationSchema);
