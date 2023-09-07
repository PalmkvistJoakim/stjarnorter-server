import { Schema, model } from "mongoose";
import Joi from "joi";
import { ICustomer, IOrder } from "interfaces/IOrder";
import {
  IProductCart,
  ICategory,
  IProductSizeOption,
} from "interfaces/IProductCart";

const productSizeOptionSchema = new Schema<IProductSizeOption>({
  weight: Number,
  price: Number,
});

const categorySchema = new Schema<ICategory>({
  _id: String,
  name: String,
  path: String,
  img: String,
});

const productCartSchema = new Schema<IProductCart>({
  _id: String,
  name: String,
  path: String,
  img: String,
  description: String,
  contents: String,
  sizes: [productSizeOptionSchema],
  category: categorySchema,
  selectedWeight: productSizeOptionSchema,
  quantity: Number,
});

const customerSchema = new Schema<ICustomer>({
  eMail: String,
  name: String,
  phone: String,
  address: String,
  zipCode: String,
  city: String,
});

const orderSchema = new Schema<IOrder>({
  customer: customerSchema,
  products: [productCartSchema],
});

const Order = model("Order", orderSchema);

export { Order, orderSchema };
