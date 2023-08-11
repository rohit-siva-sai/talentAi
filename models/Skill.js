const mongoose = require("mongoose");

let SkillSchema = new mongoose.Schema(
  {
    exYear: { type: String },
    skillLevel: { type: String },
    skill: [{ type: String }],
    email: { type: String },
  },
  { timestamps: true,collection: "skills" }
);

const Skill = mongoose.model("Skill", SkillSchema, "skills");

module.exports = Skill;
// export default mongoose.models.Skill ||
//   mongoose.model("Skill", skillsSchema);

