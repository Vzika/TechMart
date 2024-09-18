import { FC } from "react";
import axios from "axios";

const API_URI = `https://techmart-y7g6.onrender.com`;

interface Product {
  id: number;
  name: string;
  price: number;
}

const session_token = localStorage.getItem("session_token");

const fetchUser = async () => {
  const response = await axios.get(`${API_URI}/user`, {
    headers: {
      Authorization: `Bearer ${session_token}`,
    },
  });
  return response.data;
};

const fetchProducts = async () => {
  const response = await axios.get(`${API_URI}/product`, {
    headers: {
      Authorization: `Bearer ${session_token}`,
    },
  });
  return response.data;
};

const ProductServerComponent: FC<{
  children: (products: Product[]) => JSX.Element;
}> = async ({ children }) => {
  const products = await fetchProducts();
  const user = await fetchUser();
  console.log(user);
  return <>{children(products)}</>;
};

export default ProductServerComponent;
