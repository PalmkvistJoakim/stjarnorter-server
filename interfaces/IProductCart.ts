export interface ICategory {
  _id: string;
  name: string;
  path: string;
  img: string;
}

export interface IProductSizeOption {
  weight: number;
  price: number;
}

export interface IProductCart {
  _id: string;
  name: string;
  path: string;
  img: string;
  description: string;
  contents: string;
  sizes: IProductSizeOption[];
  category: ICategory;
  selectedWeight: IProductSizeOption;
  quantity: number;
}
