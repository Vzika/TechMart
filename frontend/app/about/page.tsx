import { Star, ArrowRight, ChevronRight, Facebook, Twitter, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import Navbar from "@/components/ui/custom/navbar";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Navbar />
            {/* <header className="sticky top-0 z-50 bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Menu className="h-6 w-6 cursor-pointer md:hidden" />
                        <h1 className="text-2xl font-bold text-primary">TechGadgetStore</h1>
                    </div>
                    <nav className="hidden md:flex space-x-4">
                        <Link href="#" className="text-gray-600 hover:text-primary">Home</Link>
                        <Link href="#" className="text-gray-600 hover:text-primary">Products</Link>
                        <Link href="#" className="text-gray-600 hover:text-primary">About</Link>
                        <Link href="#" className="text-gray-600 hover:text-primary">Contact</Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Search className="h-6 w-6 text-gray-400 cursor-pointer" />
                        <ShoppingCart className="h-6 w-6 text-gray-400 cursor-pointer" />
                    </div>
                </div>
            </header> */}

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to TechGadgetStore</h1>
                            <p className="text-xl mb-6">Discover the latest in computer technology and gadgets.</p>
                            <Button size="lg" className="bg-white text-blue-500 hover:bg-gray-100">
                                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=200&width=600&text=Hero Image"
                                alt="Tech Gadgets"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* Featured Categories */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-950">Featured Categories</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {['Laptops', 'Desktops', 'Accessories', 'Networking'].map((category, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                                    <img
                                        src={`https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=100&width=100&text=${category}`}
                                        alt={category}
                                        className="w-20 h-20 mx-auto mb-4"
                                    />
                                    <h3 className="text-lg font-semibold text-gray-950">{category}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Special Offers */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Special Offers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-yellow-100 rounded-lg p-6 flex items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-950">Summer Sale</h3>
                                    <p className="mb-4 text-gray-950">Get up to 30% off on selected items!</p>
                                    <Button>Shop Now</Button>
                                </div>
                                <img
                                    src="https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=150&width=150&text=Sale"
                                    alt="Summer Sale"
                                    className="w-32 h-32 ml-auto"
                                />
                            </div>
                            <div className="bg-green-100 rounded-lg p-6 flex items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-950">Bundle & Save</h3>
                                    <p className="mb-4 text-gray-950">Create your perfect setup and save 15%!</p>
                                    <Button>Build Your Bundle</Button>
                                </div>
                                <img
                                    src="https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=150&width=150&text=Bundle"
                                    alt="Bundle Offer"
                                    className="w-32 h-32 ml-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Latest Products */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-950">Latest Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src={`https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=200&width=300&text=Product ${index + 1}`}
                                        alt={`Product ${index + 1}`}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2 text-gray-950">Product {index + 1}</h3>
                                        <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-primary font-bold">${(Math.random() * 1000).toFixed(2)}</span>
                                            <Button size="sm">Add to Cart</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Button variant="outline">
                                <span className='text-gray-950'>View All Products</span> <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Customer Testimonials */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={`https://g-ycrmd35tgas.vusercontent.net/placeholder.svg?height=50&width=50&text=User`}
                                            alt={`Customer ${index + 1}`}
                                            className="w-12 h-12 rounded-full mr-4"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-gray-950">Customer {index + 1}</h3>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        "Great products and excellent customer service! I highly recommend TechGadgetStore for all your tech needs."
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-gray-950">Stay Updated</h2>
                        <p className="text-xl mb-8 text-gray-950">Subscribe to our newsletter for the latest deals and tech news!</p>
                        <div className="flex justify-center">
                            <Input type="email" placeholder="Enter your email" className="w-full max-w-md rounded-r-none" />
                            <Button className="rounded-l-none">Subscribe</Button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About Us</h3>
                            <p className="text-gray-400">TechGadgetStore is your one-stop shop for all things tech. We offer a wide range of computers and computing gadgets at competitive prices.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-white">Shipping Information</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-white">Returns & Exchanges</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <p className="text-gray-400">123 Tech Street, Gadget City, 12345</p>
                            <p className="text-gray-400">Phone: (123) 456-7890</p>
                            <p className="text-gray-400">Email: info@techgadgetstore.com</p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400">&copy; 2023 TechGadgetStore. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Facebook className="h-6 w-6 text-gray-400 cursor-pointer hover:text-white" />
                            <Twitter className="h-6 w-6 text-gray-400 cursor-pointer hover:text-white" />
                            <Instagram className="h-6 w-6 text-gray-400 cursor-pointer hover:text-white" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}