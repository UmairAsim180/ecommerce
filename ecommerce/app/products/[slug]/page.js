"use client"; // Runs only on the client side

import Navbar from "@/app/components/Navbar";
import { useParams } from "next/navigation";


const products = [
  { id: 1, slug: "wireless-headphones", name: "Wireless Headphones", price: 99, image: "/headphones.jpg", description: "High-quality wireless headphones with noise cancellation." },
  { id: 2, slug: "smart-watch", name: "Smart Watch", price: 149, image: "/watch.jpg", description: "Feature-packed smart watch with health tracking." },
  { id: 3, slug: "running-shoes", name: "Running Shoes", price: 79, image: "/shoes.jpg", description: "Lightweight and comfortable running shoes." },
];

export default function ProductPage() {
  const { slug } = useParams(); // Get slug from URL
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mt-4"/>
      <p className="text-lg mt-2">{product.description}</p>
      <p className="text-2xl text-blue-500 font-bold mt-2">${product.price}</p>
      <button className="bg-green-500 text-white px-6 py-2 mt-4 rounded">Add to Cart</button>
    </div>
    </>
  );
}
