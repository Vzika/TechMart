"use client";
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Plus, Minus, ShoppingCart, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import Navbar from '@/components/ui/custom/navbar';
import { useParams } from 'next/navigation';
import axios from "axios";

const API_URI = `http://127.0.0.1:5000`;

interface Product {
    description: string;
    id: number;
    name: string;
    price: number;
}

export default async function SingleItemView() {
    const { product_id } = useParams();
    const [currentImage, setCurrentImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const images = [
        "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=400&width=600&text=Product Image 1",
        "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=400&width=600&text=Product Image 2",
        "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=400&width=600&text=Product Image 3",
        "https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=400&width=600&text=Product Image 4",
    ]

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    }

    let products: Product[] = [];
    await axios.get(`${API_URI}/product`).then((res) => {
        products = res.data.splice(0, 4);
    })

    let product: Product = {
        name: 'undefined',
        description: 'undefined',
        id: 999,
        price: 999
    };
    await axios.get(`${API_URI}/product/${product_id}`).then((res) => {
        product = res.data
    });
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Image Carousel */}
                    <div className="relative">
                        <div className="aspect-w-4 aspect-h-3 mb-4">
                            <img
                                src={images[currentImage]}
                                alt={`${product.name} image ${currentImage + 1}`}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                            <Button variant="outline" size="icon" onClick={prevImage} className="rounded-full">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                            <Button variant="outline" size="icon" onClick={nextImage} className="rounded-full">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex justify-center mt-4 space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-primary' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <div className="flex items-center mb-4">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">(128 reviews)</span>
                        </div>
                        <p className="text-2xl font-bold mb-4">${product.price}</p>
                        <p className="text-gray-600 mb-6">
                            {product.description}
                        </p>
                        <div className="flex items-center mb-6">
                            <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                <Minus className="h-4 w-4" />
                            </Button>
                            <span className="mx-4 text-xl font-semibold">{quantity}</span>
                            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex space-x-4 mb-6">
                            <Button className="flex-1">
                                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                            </Button>
                            <Button variant="outline">
                                <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
                            </Button>
                        </div>
                        <Separator className="my-6" />
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-semibold">SKU:</span> LP-X1-2023
                            </div>
                            <div>
                                <span className="font-semibold">Category:</span> Laptops
                            </div>
                            <div>
                                <span className="font-semibold">Stock:</span> In Stock
                            </div>
                            <div>
                                <span className="font-semibold">Shipping:</span> Free Shipping
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Tabs */}
                <Tabs defaultValue="description" className="mt-12">
                    <TabsList>
                        <TabsTrigger value="description">Description</TabsTrigger>
                        <TabsTrigger value="specifications">Specifications</TabsTrigger>
                        <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    </TabsList>
                    <TabsContent value="description" className="mt-4">
                        <h2 className="text-xl font-semibold mb-2">Product Description</h2>
                        <p>
                            The Ultra-Slim Laptop Pro X1 is the ultimate companion for professionals and creatives who demand the
                            best. With its sleek design and powerful performance, this laptop delivers an unparalleled computing
                            experience.
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Powerful 11th Gen Intel Core i7 processor</li>
                            <li>16GB RAM for smooth multitasking</li>
                            <li>512GB SSD for fast boot and load times</li>
                            <li>14-inch 4K Ultra HD display with thin bezels</li>
                            <li>Up to 12 hours of battery life</li>
                            <li>Thunderbolt 4 ports for versatile connectivity</li>
                        </ul>
                    </TabsContent>
                    <TabsContent value="specifications" className="mt-4">
                        <h2 className="text-xl font-semibold mb-2">Technical Specifications</h2>
                        <table className="w-full">
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-2 font-semibold">Processor</td>
                                    <td className="py-2">11th Gen Intel Core i7-1165G7</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 font-semibold">RAM</td>
                                    <td className="py-2">16GB LPDDR4X</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 font-semibold">Storage</td>
                                    <td className="py-2">512GB NVMe SSD</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 font-semibold">Display</td>
                                    <td className="py-2">14-inch 4K Ultra HD (3840 x 2160) IPS</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 font-semibold">Graphics</td>
                                    <td className="py-2">Intel Iris Xe Graphics</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 font-semibold">Battery</td>
                                    <td className="py-2">67Wh, up to 12 hours</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-2 font-semibold">Weight</td>
                                    <td className="py-2">2.8 lbs (1.27 kg)</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-semibold">Operating System</td>
                                    <td className="py-2">Windows 11 Pro</td>
                                </tr>
                            </tbody>
                        </table>
                    </TabsContent>
                    <TabsContent value="reviews" className="mt-4">
                        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
                        <div className="space-y-6">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="border-b pb-4">
                                    <div className="flex items-center mb-2">
                                        <div className="flex mr-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <span className="font-semibold">John Doe</span>
                                    </div>
                                    <p className="text-gray-600">
                                        This laptop exceeded my expectations! The performance is outstanding, and the battery life is
                                        impressive. I highly recommend it to anyone looking for a powerful and portable machine.
                                    </p>
                                </div>
                            ))}
                        </div>
                        <Button className="mt-4">Write a Review</Button>
                    </TabsContent>
                </Tabs>

                {/* Related Products */}
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <div key={index} className="border rounded-lg overflow-hidden">
                                <img
                                    src={`https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=200&width=300&text=Related Product ${index + 1}`}
                                    alt={product}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-2">{product.description}.</p>
                                    <p className="font-bold">${product.price}</p>
                                    <Button variant="outline" className="w-full mt-2">View Details</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}