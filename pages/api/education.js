import connectDb from "@/middleware/mongoose";
import Education from "../../models/Education";
import mongoose from "mongoose";

const handler = async (req, res) => {
  
      let developers = await Education.find();
      console.log('ss',developers)
      
      res.status(200).json(developers)
      console.log('Fetched developers:', developers);
 
    res.status(500).json({ error: "An error occurred while fetching developers." });
  
};

export default connectDb(handler);