const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema(
  {
    exYear: { type: String },
    skillLevel: { type: String },
    skill: [{ type: String }],
    email: { type: String },
  },
  { timestamps: true }
);

const Skills = mongoose.model("Skills", skillsSchema, "skills");

module.exports = Skills;
