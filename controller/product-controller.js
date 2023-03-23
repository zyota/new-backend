import express from "express";
import upload from "../util/multer-handler.js";

const productRouter = express.Router();

productRouter.post("/addProduct", upload.single, (req, res) => {
  res.send("Post Success");
  console.log(req);
});

productRouter.get("/getProduct", (req, res) => {
  res.send("Get Success ");
  console.log(req);
});

export default productRouter;
