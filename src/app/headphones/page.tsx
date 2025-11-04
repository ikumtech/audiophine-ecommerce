// app/headphones/page.tsx
import CategoryHeader from '@/components/shared/CategoryHeader';
import ProductList from '@/components/category/ProductList';
import CategoryCards from '@/components/home/CategoryCards';
import BestGear from '@/components/home/BestGear';
import Footer from '@/components/Footer';

export default function HeadphonesPage() {
  return (
    <main>
      <CategoryHeader title="HEADPHONES" />
      <ProductList category="headphones" />
      <CategoryCards />
      <BestGear />
      <Footer />
    </main>
  );
}
