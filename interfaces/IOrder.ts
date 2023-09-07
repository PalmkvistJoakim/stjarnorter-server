import { IProductCart } from "./IProductCart";

export interface ICustomer {
  eMail: string;
  name: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
}

export interface ISummary {
  totalQuantity: number;
  shippingCost: number;
  totalAmount: number;
}

export interface IOrder {
  customer: ICustomer;
  products: IProductCart[];
  summary: ISummary;
}
