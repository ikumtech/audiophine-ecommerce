'use client';

import ProductList from '@/components/category/ProductList';
import CategoryCards from '@/components/home/CategoryCards';
import BestGear from '@/components/home/BestGear';
import Footer from '@/components/Footer';
import CategoryHeader from '@/components/CategoryHeader';

const headphoneProducts = [
  {
    title: 'XX99 Mark II Headphones',
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    image: '/assets/products/Group 3.png',
    slug: '/product/xx99-mark-two',
    isNew: true,
  },
  {
    title: 'XX99 Mark I Headphones',
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    image: '/assets/products/Group 3 (1).png',
    slug: '/product/xx99-mark-one',
  },
  {
    title: 'XX59 Headphones',
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    image: '/assets/products/Group 3 (2).png',
    slug: '/product/xx59',
  },
];

export default function HeadphonesPage() {
  return (
    <main>
      <CategoryHeader title="Headphones" />
      <ProductList products={headphoneProducts} />
      <CategoryCards />
      <BestGear />
      <Footer />
    </main>
  );
}
