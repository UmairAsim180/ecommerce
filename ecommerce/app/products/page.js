"use client"
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const products = [
    { id: 1, name: "Wireless Headphones", price: 99, image: "/headphones.jpg", category: "Electronics" },
    { id: 2, name: "Smart Watch", price: 149, image: "/watch.jpg", category: "Electronics" },
    { id: 3, name: "Running Shoes", price: 79, image: "/shoes.jpg", category: "Fashion" },
    { id: 4, name: "Leather Wallet", price: 39, image: "/wallet.jpg", category: "Fashion" },
];

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts =
        selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);

    return (
        <>
        <Navbar />
        <div className="container bg-color1 text-color4 mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>

            {/* Category Filter */}
            <div className="flex justify-center mb-6">
                {["All", "Electronics", "Fashion"].map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 mx-2 rounded ${selectedCategory === category ? "bg-color4 text-white" : "bg-gray-200"
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                        <div className="p-4 bg-white shadow rounded">
                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
                            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                            <p className="text-blue-500 font-bold">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        </>
    );
}
