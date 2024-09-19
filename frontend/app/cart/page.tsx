"use client";

import { useState } from 'react'
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import Navbar from '@/components/ui/custom/navbar';

interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
    image: string
}

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: "Ultra-Slim Laptop Pro X1", price: 1299.99, quantity: 1, image: "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=100&width=100&text=Laptop" },
        { id: 2, name: "Wireless Noise-Cancelling Headphones", price: 249.99, quantity: 2, image: "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=100&width=100&text=Headphones" },
        { id: 3, name: "4K Ultra HD Smart TV", price: 799.99, quantity: 1, image: "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=100&width=100&text=TV" },
    ])

    const updateQuantity = (id: number, newQuantity: number) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
        ).filter(item => item.quantity > 0))
    }

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = 10 // Flat rate shipping
    const total = subtotal + shipping

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-8">
                                <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                                <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                                <p className="text-gray-600 mb-4">Looks like you haven't added any items to your cart yet.</p>
                                <Button asChild>
                                    <Link href="/">Start Shopping</Link>
                                </Button>
                            </div>
                        ) : (
                            <ul className="divide-y divide-gray-200">
                                {cartItems.map((item) => (
                                    <li key={item.id} className="py-6 flex">
                                        <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-center object-cover"
                                            />
                                        </div>

                                        <div className="ml-4 flex-1 flex flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>{item.name}</h3>
                                                    <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                                            </div>
                                            <div className="flex-1 flex items-end justify-between text-sm">
                                                <div className="flex items-center">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </Button>
                                                    <span className="mx-2 w-8 text-center">{item.quantity}</span>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                                <div className="flex">
                                                    <Button
                                                        variant="ghost"
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-red-600 hover:text-red-500"
                                                    >
                                                        <X className="h-4 w-4 mr-1" />
                                                        Remove
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between font-semibold">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <Button className="w-full mt-6" disabled={cartItems.length === 0}>
                                Proceed to Checkout
                            </Button>
                            <Button variant="outline" className="w-full mt-4" asChild>
                                <Link href="/">Continue Shopping</Link>
                            </Button>
                        </div>

                        {/* Promo Code */}
                        <div className="mt-6">
                            <h3 className="text-sm font-semibold mb-2">Have a promo code?</h3>
                            <div className="flex">
                                <Input type="text" placeholder="Enter your code" className="rounded-r-none" />
                                <Button className="rounded-l-none">Apply</Button>
                            </div>
                        </div>

                        {/* Suggested Products */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold mb-4">You might also like</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: "Wireless Mouse", price: 29.99, image: "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=80&width=80&text=Mouse" },
                                    { name: "USB-C Hub", price: 49.99, image: "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=80&width=80&text=Hub" },
                                ].map((product, index) => (
                                    <div key={index} className="border rounded-lg p-4 text-center">
                                        <img src={product.image} alt={product.name} className="w-20 h-20 mx-auto mb-2" />
                                        <h4 className="text-sm font-semibold">{product.name}</h4>
                                        <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
                                        <Button variant="outline" size="sm" className="mt-2">Add to Cart</Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}