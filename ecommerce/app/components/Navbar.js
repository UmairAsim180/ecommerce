import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-around items-center w-full text-color4 bg-[#A6B1E1]'>
                <ul className='flex justify-center space-x-4 p-4 w-[20%] text-xl font-bold'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold p-4'>E-Commerce</h1>
                </div>
                <div className="icon flex space-x-4 w-[20%] text-xl justify-center">
                    <FaShoppingCart />
                    <MdOutlineFavorite />
                    <MdManageAccounts />
                    <FaSearch />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;