// src/app/headphones/page.tsx
'use client';

import ProductList from '@/components/category/ProductList';
import CategoryCards from '@/components/home/CategoryCards';
import BestGear from '@/components/home/BestGear';
import Footer from '@/components/Footer';

export default function HeadphonesPage() {
  return (
    <main className="bg-white text-black">
      <section className="bg-black text-white text-center py-20">
        <h1 className="text-3xl md:text-4xl uppercase tracking-wider">Headphones</h1>
      </section>

      <ProductList />
      <CategoryCards />
      <BestGear />
      <Footer />
    </main>
  );
}
