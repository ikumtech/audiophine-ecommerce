// src/components/ProductList.tsx
import ProductCard from './ProductCard';

const products = [
  {
    title: 'XX99 Mark II Headphones',
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    image: '/assets/products/product-xx99-mark-two.png',
    alt: 'XX99 Mark II Headphones',
  },
  {
    title: 'XX99 Mark I Headphones',
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    image: '/assets/products/product-xx99-mark-one.png',
    alt: 'XX99 Mark I Headphones',
  },
  {
    title: 'XX59 Headphones',
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    image: '/assets/products/product-xx59.png',
    alt: 'XX59 Headphones',
  },
];

export default function ProductList() {
  return (
    <section className="px-6 md:px-20 max-w-7xl mx-auto">
      {products.map((product, index) => (
        <ProductCard key={product.title} {...product} reverse={index % 2 !== 0} />
      ))}
    </section>
  );
}
