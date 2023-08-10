import connectDb from "@/middleware/mongoose";
import Product from "@/models/productSchema";
import mongoose from "mongoose";

const handler = async (req, res) => {
  try {
    if (req.method === "GET") {
      const developers = await Product.find()
      console.log('ss',developers);
      
      res.status(200).json(developers);
      console.log('Fetched developers:', developers);
    } else {
      res.status(405).json({ error: "Method not allowed." });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching developers." });
  }
};

export default connectDb(handler);
