import mongoose from "mongoose";

await mongoose
  .connect(
    "mongodb+srv://1234:G9eENWJBqN5TY9Xc@cluster0.585lspq.mongodb.net/ecommerce?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("Mongoose Connected");
  })
  .catch(console.log("Failed"));

export default mongoose.connection;
