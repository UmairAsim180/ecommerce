"use client"
import Navbar from "./components/Navbar";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-color1 text-color4">
      <Navbar />
      <section className="bg-gray-100 py-12 text-center h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Shop Smarter, Live Better!</h1>
        <p className="text-lg text-gray-600 mt-2">Discover the latest trends with unbeatable prices.</p>
        <Link href="/products">
        <button className="bg-color4 text-white px-6 py-2 mt-4 rounded">Shop Now</button>
        </Link>
      </section>
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="p-4 bg-white shadow rounded text-center">👕 Fashion</div>
          <div className="p-4 bg-white shadow rounded text-center">📱 Electronics</div>
          <div className="p-4 bg-white shadow rounded text-center">🏠 Home & Kitchen</div>
          <div className="p-4 bg-white shadow rounded text-center">🧴 Beauty & Health</div>
        </div>
      </section>
    </div>
  );
}
