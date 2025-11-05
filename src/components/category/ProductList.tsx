// src/components/category/ProductList.tsx
import ProductCard from './ProductCard';

type Product = {
  title: string;
  description: string;
  image: string;
  slug: string;
  isNew?: boolean;
};

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <section className="px-6 md:px-20 max-w-7xl mx-auto space-y-32 py-16">
      {products.map((product, index) => (
        <ProductCard
          key={product.title}
          {...product}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
}
