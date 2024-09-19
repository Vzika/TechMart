"use client";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Plus,
  Minus,
  ShoppingCart,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Navbar from "@/components/ui/custom/navbar";
import { useParams } from "next/navigation";
import ProductServerComponent from "@/components/productserver";
import { Product } from "@/components/types";
import axios from "axios";
import Loader from "@/components/ui/custom/loader";
import { User } from "@/components/types";
import { getUserData } from "@/lib/getUser";

const API_URI = `https://techmart-y7g6.onrender.com`;

const images = [
  "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=400&width=600&text=Product Image 1",
  "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=400&width=600&text=Product Image 2",
  "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=400&width=600&text=Product Image 3",
  "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=400&width=600&text=Product Image 4",
];

const SingleProductPage = () => {
  const { product_id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingOrder, setLoadingOrder] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URI}/product/${product_id}`);
        setProduct(response.data);

        const token = localStorage.getItem("session_token");
        if (token) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [product_id]);

  const handlePlaceOrder = async () => {
    if (!isLoggedIn) {
      alert("You must be logged in to place an order.");
      return;
    }

    const [currentUser, setCurrentUser] = useState<User | null>(null);
    useEffect(() => {
      const fetchUser = async () => {
        const userData: User = await getUserData();
        setCurrentUser(userData);
      };
      fetchUser();
    }, []);
    const order = {
      customer_name: currentUser?.username || 'Guest',
      customer_email: currentUser?.email || 'guest@mail.com',
      product_id: Number(product_id),
      quantity,
    };
    // const order = {
    //   customer_name: "John Doe",
    //   customer_email: "john.doe@example.com",
    //   product_id: Number(product_id),
    //   quantity,
    // };
    console.log(order);
    try {
      setLoadingOrder(true);
      const makeOrder = await axios.post(`${API_URI}/add_order`, order, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("session_token")}`,
        },
      });
      console.log(makeOrder);
    } catch (error) {
      console.log("An error occurred", error);
    } finally {
      setLoadingOrder(false);
    }
  };

  if (loading)
    return (
      <div className='min-h-screen w-full flex items-center justify-center'>
        <Loader />
      </div>
    );

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Image Carousel */}
          <div className='relative'>
            <div className='aspect-w-4 aspect-h-3 mb-4'>
              <img
                src={images[currentImage]}
                alt={`${product.name} image ${currentImage + 1}`}
                className='object-cover rounded-lg'
              />
            </div>
            <div className='absolute top-1/2 left-4 transform -translate-y-1/2'>
              <Button
                variant='outline'
                size='icon'
                onClick={prevImage}
                className='rounded-full'>
                <ChevronLeft className='h-4 w-4' />
              </Button>
            </div>
            <div className='absolute top-1/2 right-4 transform -translate-y-1/2'>
              <Button
                variant='outline'
                size='icon'
                onClick={nextImage}
                className='rounded-full'>
                <ChevronRight className='h-4 w-4' />
              </Button>
            </div>
            <div className='flex justify-center mt-4 space-x-2'>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full ${index === currentImage ? "bg-primary" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
            <div className='flex items-center mb-4'>
              <div className='flex'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className='h-5 w-5 text-yellow-400 fill-current'
                  />
                ))}
              </div>
              <span className='ml-2 text-sm text-gray-600'>(128 reviews)</span>
            </div>
            <p className='text-2xl font-bold mb-4'>${product.price}</p>
            <p className='text-gray-600 mb-6'>{product.description}</p>
            <div className='flex items-center mb-6'>
              <Button
                variant='outline'
                size='icon'
                onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus className='h-4 w-4' />
              </Button>
              <span className='mx-4 text-xl font-semibold'>{quantity}</span>
              <Button
                variant='outline'
                size='icon'
                onClick={() => setQuantity(quantity + 1)}>
                <Plus className='h-4 w-4' />
              </Button>
            </div>
            <div className='flex space-x-4 mb-6'>
              {isLoggedIn ? (
                <Button
                  className='flex-1'
                  onClick={handlePlaceOrder}
                  disabled={loadingOrder}>
                  <ShoppingCart className='mr-2 h-4 w-4' />{" "}
                  {loadingOrder ? "Placing Order..." : "Place an Order"}
                </Button>
              ) : (
                <Button
                  className='flex-1'
                  onClick={() => alert("Please log in to place an order")}>
                  <ShoppingCart className='mr-2 h-4 w-4' /> Log in to Order
                </Button>
              )}
              <Button variant='outline' className='flex-1'>
                <Heart className='mr-2 h-4 w-4' /> Add to Wishlist
              </Button>
            </div>
            <div>
              <span className='font-semibold'>Tags:</span> Electronics, Tech
            </div>
            <div>
              <span className='font-semibold'>Availability:</span> In Stock
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
