"use client";

import { ShoppingCart, Search, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUserData, handleLogout } from "@/lib/getUser";
import { User } from "@/components/types";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const userData: User = await getUserData();
      setCurrentUser(userData);
    };
    fetchUser();
  }, []);
  // return <Search className='h-6 w-6 text-gray-400 cursor-pointer' />;

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <Menu className='h-6 w-6 cursor-pointer md:hidden' />
          <h1 className='text-2xl font-bold text-primary'>
            <Link href='/'>TechMart</Link>
          </h1>
        </div>
        <nav className='hidden md:flex space-x-4'>
          <Link href='/' className='text-gray-600 hover:text-primary'>
            Home
          </Link>
          <Link href='/about' className='text-gray-600 hover:text-primary'>
            About
          </Link>
          {currentUser ? (
            <p
              onClick={handleLogout}
              className='text-gray-600 hover:text-primary cursor-pointer'>
              Logout
            </p>
          ) : (
            <Link href='/login' className='text-gray-600 hover:text-primary'>
              Login
            </Link>
          )}
          {/* <Link href='login' className='text-gray-600 hover:text-primary'>
            Account Login
          </Link> */}
        </nav>
        <div className='flex flex-row gap-4'>
          {/* <Search className='h-6 w-6 text-gray-400 cursor-pointer' /> */}
          <p className='text-lg'>{currentUser?.username}</p>
          <Link href='/cart'>
            <ShoppingCart className='h-6 w-6 text-gray-400 cursor-pointer' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
