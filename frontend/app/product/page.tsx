"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "@/components/ui/custom/navbar";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/custom/loader"; // Import the Loader component

const API_URI = `https://techmart-y7g6.onrender.com`;

interface Product {
  id: number;
  name: string;
  price: number;
}

interface User {
  username: string;
  email: string;
}

const AllProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sessionToken = localStorage.getItem("session_token");

    // Fetch user data if authenticated
    const fetchUserData = async () => {
      if (sessionToken) {
        try {
          const userResponse = await axios.get(`${API_URI}/user`, {
            headers: {
              Authorization: `Bearer ${sessionToken}`,
            },
          });
          setUser(userResponse.data);
        } catch (err) {
          console.error("Error fetching user data:", err);
          setError("Failed to load user data.");
        }
      }
    };

    // Always fetch products, even without authentication
    const fetchProducts = async () => {
      try {
        const productResponse = await axios.get(`${API_URI}/product`, {
          headers: sessionToken
            ? {
              Authorization: `Bearer ${sessionToken}`,
            }
            : undefined, // No token if not authenticated
        });
        setProducts(productResponse.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchUserData(), fetchProducts()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div>{error}</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-4'>All Products</h1>
        {user && (
          <div className='mb-4'>
            <p>Welcome, {user.username}!</p>
          </div>
        )}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {products.map((product) => (
            <div key={product.id} className='border rounded-lg overflow-hidden'>
              <img
                src={`https://example.com/product/${product.id}/image`} // Placeholder for product image
                alt={product.name}
                className='w-full h-40 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
                <p className='text-sm text-gray-600 mb-2'>${product.price}</p>
                <Link href={`/product/${product.id}`}>
                  <Button className='w-full'>View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProductsPage;
