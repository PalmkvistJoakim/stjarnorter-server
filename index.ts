import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import orders from "./routes/orders";
import swishPayment from "./routes/swish";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stjarnorter/orders", orders);
app.use("/api/stjarnorter/swishpayment", swishPayment);

mongoose
  .connect("mongodb://localhost/stjarnorter")
  .then(() => console.log("Connected to MongoDB.."))
  .catch(() => console.log("Could not connect to MongoDB.."));

app.listen(8000, () => console.log("Server is running on port 8000.."));
