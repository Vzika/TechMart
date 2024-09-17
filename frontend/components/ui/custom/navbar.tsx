import {
    ShoppingCart,
    Search,
    Menu,
} from "lucide-react";
import Link from 'next/link';

const Navbar: any = () => {
    return (

        <header className='sticky top-0 z-50 bg-white shadow-md'>
            <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <Menu className='h-6 w-6 cursor-pointer md:hidden' />
                    <h1 className='text-2xl font-bold text-primary'><Link href='/'>TechMart</Link></h1>
                </div>
                <nav className='hidden md:flex space-x-4'>
                    <Link href='/' className='text-gray-600 hover:text-primary'>
                        Home
                    </Link>
                    <Link href='/about' className='text-gray-600 hover:text-primary'>
                        About
                    </Link>
                    <Link href='login' className='text-gray-600 hover:text-primary'>
                        Account Login
                    </Link>
                </nav>
                <div className='flex items-center space-x-4'>
                    <Search className='h-6 w-6 text-gray-400 cursor-pointer' />
                    <Link href='/cart'>
                        <ShoppingCart className='h-6 w-6 text-gray-400 cursor-pointer' />
                    </Link>
                </div>
            </div>
        </header>

    )
}

export default Navbar;