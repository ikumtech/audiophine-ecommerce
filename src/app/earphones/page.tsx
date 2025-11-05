'use client';

import ProductList from '@/components/category/ProductList';
import CategoryCards from '@/components/home/CategoryCards';
import BestGear from '@/components/home/BestGear';
import Footer from '@/components/Footer';
import CategoryHeader from '@/components/CategoryHeader';

const earphoneProducts = [
  {
    title: 'YX1 Wireless Earphones',
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    image: '/assets/products/YX1 Earphones.png',
    slug: '/product/yx1',
    isNew: true,
  },
];

export default function EarphonesPage() {
  return (
    <main>
      <CategoryHeader title="Earphones" />
      <ProductList products={earphoneProducts} />
      <CategoryCards />
      <BestGear />
      <Footer />
    </main>
  );
}
