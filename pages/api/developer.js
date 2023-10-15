import connectDb from "@/middleware/mongoose";
import Developer from "../../models/Developer";
import mongoose from "mongoose";
const allowedOrigins = ['https://talent-ai-ochre.vercel.app'];

import nc from 'next-connect';
import cors from 'cors';

// const handler = nc()
//   .use(cors({ origin: 'https://talent-ai-ochre.vercel.app' }))


const handler = async (req, res) => {
  
      res.setHeader('Access-Control-Allow-Origin', 'https://talent-ai-ochre.vercel.app');
 
      // console.log('wewehwefyecwgf`c');
      
      // const dev = await Developer.find().lean()
      const dev = await Developer.find().lean()
      // console.log('ss',dev);
      
      res.status(200).json(dev);
      // console.log('Fetched developers:',dev);
    
  
    // res.status(500).json({ error: "An error occurred while fetching developers." });
  
};

export default connectDb(handler);
