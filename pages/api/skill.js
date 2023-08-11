import connectDb from "@/middleware/mongoose";
import Skill from "../../models/Skill";
import mongoose from "mongoose";

const handler = async (req, res) => {
  
      console.log('wewehwefyecwgfc');
      
      // const dev = await Developer.find().lean()
      const dev = await Skill.find()
      console.log('ss',dev);
      
      res.status(200).json(dev);
    //   console.log('Fetched developers:',dev);
    
  
    // res.status(500).json({ error: "An error occurred while fetching developers." });
  
};

export default connectDb(handler);
