import express from "express";
import { Order } from "models/Order";
const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Order.find();

  if (!orders) return res.status(404).send("No Orders was found..");

  return res.status(200).send(orders);
});

router.post("/", async (req, res) => {
  const { eMail, name, phone, address, zipCode, city } = req.body.customer;
  const products = req.body.products;

  const newOrder = new Order({
    customer: {
      eMail: eMail,
      phone: phone,
      name: name,
      address: address,
      zipCode: zipCode,
      city: city,
    },
    products: products,
  });

  const saveOrder = await newOrder.save();
  res.status(201).send(saveOrder);
});

export default router;
