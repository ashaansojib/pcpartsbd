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

export interface Menu {
  _id: string;
  title: string;
  link: string;
}
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  address: string;
  mobile: string;
  zip: string;
  division: string;
  state: string;
}
export interface ProductCardProps {
  product: Product;
  handleAddToCart: (id: any) => void;
}
export interface CartItemPros {
  _id: string;
  title: string;
  price: number;
  discount: number;
  totalPrice: number;
  quantity: number;
  image: string;
  model: string;
}