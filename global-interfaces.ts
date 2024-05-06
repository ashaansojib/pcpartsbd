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
}
export interface Menu {
  _id: string;
  title: string;
  link: string;
}
export interface Casing {
  _id: string;
  title: string;
  image: string;
  price: string;
  description: string;
  category: string;
  model: string;
  status: string;
  discount: Number;
  filename: string;
}
