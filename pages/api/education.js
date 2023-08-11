import connectDb from "@/middleware/mongoose";
import Education from "../../models/Education";
import mongoose from "mongoose";

const handler = async (req, res) => {
  
      let dev = await Education.find();
      console.log('ss',dev)
      
      res.status(200).json(dev)
      console.log('Fetched developers:', dev);
 
    res.status(500).json({ error: "An error occurred while fetching developers." });
  
};

export default connectDb(handler);