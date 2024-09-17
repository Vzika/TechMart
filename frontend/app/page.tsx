"use client";

import {
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import Navbar from "@/components/ui/custom/navbar";

export default function TechMart() {
  return (
    <div className='flex flex-col min-h-screen font-poppins'>
      <Navbar />
      <main className='flex-grow container mx-auto px-4 py-8'>
        <h2 className='text-3xl font-bold mb-6'>Featured Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105'>
              <img
                src={`https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=200&width=300&text=Product ${index + 1
                  }`}
                alt={`Product ${index + 1}`}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-lg font-semibold mb-2 text-gray-950'>
                  Product {index + 1}
                </h3>
                <p className='text-gray-600 mb-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className='flex justify-between items-center'>
                  <span className='text-primary font-bold'>
                    ${(Math.random() * 1000).toFixed(2)}
                  </span>
                  <Button size='sm'>Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className='bg-gray-100 mt-12'>
        <div className='container mx-auto px-4 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-lg font-semibold mb-4 text-gray-950'>About Us</h3>
              <p className='text-gray-600'>
                TechGadgetStore is your one-stop shop for all things tech. We
                offer a wide range of computers and computing gadgets at
                competitive prices.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-4 text-gray-950'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='text-gray-600 hover:text-primary'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600 hover:text-primary'>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600 hover:text-primary'>
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600 hover:text-primary'>
                    Returns & Exchanges
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-4 text-gray-950'>Newsletter</h3>
              <p className='text-gray-600 mb-4'>
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className='flex'>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  className='rounded-r-none'
                />
                <Button className='rounded-l-none'>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className='mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-600'>
              &copy; 2023 TechGadgetStore. All rights reserved.
            </p>
            <div className='flex space-x-4 mt-4 md:mt-0'>
              <Facebook className='h-6 w-6 text-gray-400 cursor-pointer hover:text-primary' />
              <Twitter className='h-6 w-6 text-gray-400 cursor-pointer hover:text-primary' />
              <Instagram className='h-6 w-6 text-gray-400 cursor-pointer hover:text-primary' />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
