import express from "express";
import cors from "cors";
import productRouter from "./controller/product-controller.js";
// import cloudinary from "./config/cloudinary-config.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(productRouter);

app.listen(port, () => {
  console.log("listening on ", port);
});

// const res = cloudinary.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }
// );

// res
//   .then((data) => {
//     console.log(data);
//     console.log(data.secure_url);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
