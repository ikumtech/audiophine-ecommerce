'use client';

import ProductList from '@/components/category/ProductList';
import CategoryCards from '@/components/home/CategoryCards';
import BestGear from '@/components/home/BestGear';
import Footer from '@/components/Footer';
import CategoryHeader from '@/components/CategoryHeader';

const speakerProducts = [
  {
    title: 'ZX9 Speaker',
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity — creating new possibilities for more pleasing and practical audio setups.',
    image: '/assets/products/ZX9 Speaker.png',
    slug: '/product/zx9',
    isNew: true,
  },
  {
    title: 'ZX7 Speaker',
    description:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    image: '/assets/products/ZX7 Speaker.png',
    slug: '/product/zx7',
  },
];

export default function SpeakersPage() {
  return (
    <main>
      <CategoryHeader title="Speakers" />
      <ProductList products={speakerProducts} />
      <CategoryCards />
      <BestGear />
      <Footer />
    </main>
  );
}
