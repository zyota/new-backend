import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
    sale: { type: Number, required: false },
    image: { type: String },
    created_at: { type: String },
    updated_at: { type: String },
  },
  {
    collection: "product",
  }
);
export default productSchema;
