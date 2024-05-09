export interface Product {
  _id: string;
  title: string;
  category: string;
  info: string;
  brand: string;
  price: string;
  discount: string;
  image: string;
  model: string;
  status: string;
  fileName: string;
}
export interface FeaturedCardProps {
  product: Product;
  handleBuy: (id: any) => void;
}

export interface Menu {
  _id: string;
  title: string;
  link: string;
}
export interface User{
  _id: string,
  firstName: string,
  lastName: string,
  address: string,
  mobile: string,
  zip: string,
  division: string,
  state: string,
}

export interface CartItemProps{
  _id: string,
  title: string,
  image: string,
  price: Number,
  discount: Number,
  model: string,
  quantity: Number,
}