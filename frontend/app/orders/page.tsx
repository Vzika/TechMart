"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PenIcon, Trash2Icon, EyeIcon } from "lucide-react";
import { FilterForm } from "./filter-form";
import Navbar from "@/components/ui/custom/navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { handleLogout } from '@/lib/getUser';

type Order = {
  id: number;
  user_id: number;
  product_id: number;
  created_at: Date;
};

function OrderActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-8 w-8 p-0'>
          <span className='sr-only'>Open menu</span>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem className='text-red-600'>
          <Trash2Icon className='mr-2 h-4 w-4' />
          Delete order
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default async function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("session_token");
    const fetchOrders = async () => {
      try {
        const orderResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/orders`, {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          }
        });
        console.log(orderResponse.status);

        // setOrders(orderResponse.data);
        console.log(orderResponse.data);

      } catch (err) {
        console.error("Error fetching products:", err);
        handleLogout();
        window.location.href = '/';
      }
      fetchOrders();
    };

  }, []);

  return (
    <>
      <Navbar />
      <div className='container mx-auto py-10'>
        <Card className='shadow-lg'>
          <CardHeader className='bg-gray-50'>
            <CardTitle className='text-2xl font-bold text-gray-800'>
              Your Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* <FilterForm initialFilters={filters} /> */}
            <div className='overflow-x-auto mt-6'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[100px]'>Order ID</TableHead>
                    <TableHead>Customer Name</TableHead>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead className='text-right'>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id} className='hover:bg-gray-50'>
                      <TableCell className='font-medium'>{order.id}</TableCell>
                      <TableCell>{order.user_id}</TableCell>
                      <TableCell>
                        {new Date(order.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>${order.product_id.toFixed(2)}</TableCell>
                      <TableCell className='text-right'>
                        <OrderActions />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
