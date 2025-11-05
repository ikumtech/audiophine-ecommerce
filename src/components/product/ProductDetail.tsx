'use client';

import Image from 'next/image';
import { useState } from 'react';

type Product = {
  name: string;
  description: string;
  price: number;
  isNew: boolean;
  slug: string;
  features: string;
  inTheBox: { item: string; quantity: number }[];
  gallery: string[];
  image: string;
};

export default function ProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Add to cart:', product.slug, quantity);
  };

  return (
    <div className="space-y-28">

      {/* Product Hero */}
      <section className="flex flex-col lg:flex-row items-center gap-10">
        <div className="bg-neutral-100 rounded-lg p-4 w-full lg:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={540}
            height={560}
            className="rounded-lg w-full h-auto object-contain"
          />
        </div>
        <div className="text-center lg:text-left space-y-6 w-full lg:w-1/2">
          {product.isNew && (
            <p className="text-sm text-orange-500 tracking-widest uppercase">New Product</p>
          )}
          <h2 className="text-3xl font-bold uppercase">{product.name}</h2>
          <p className="text-gray-500">{product.description}</p>
          <p className="font-bold text-lg">${product.price.toLocaleString()}</p>

          {/* Quantity Selector */}
          <div className="flex gap-4 items-center">
            <div className="bg-gray-100 px-4 py-2 flex items-center gap-4">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <span className="font-semibold">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            <button
              className="bg-orange-500 text-white px-6 py-3 uppercase text-sm tracking-wider hover:bg-orange-400 transition"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Features + In the Box */}
      <section className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-2/3">
          <h3 className="text-2xl font-bold uppercase mb-6">Features</h3>
          <p className="text-gray-500 whitespace-pre-line">{product.features}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold uppercase mb-6">In the Box</h3>
          <ul className="space-y-2">
            {product.inTheBox.map((item, idx) => (
              <li key={idx} className="text-gray-500">
                <span className="text-orange-500 font-bold mr-2">{item.quantity}x</span>
                {item.item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.gallery.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`${product.name} gallery ${i + 1}`}
              width={500}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </section>

      {/* You May Also Like */}
      {/* TODO: Add recommendations if available */}
    </div>
  );
}
