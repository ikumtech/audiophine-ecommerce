

import Hero from '@/components/Hero';
import CategoryCards from '@/components/home/CategoryCards';
import Zx9Highlight from '@/components/home/Zx9Highlight';
import Zx7Speaker from '@/components/Zx7Speaker';
import Yx1Earphones from '@/components/Yx1Earphones';
import BestGear from '@/components/home/BestGear';
import Footer from '@/components/Footer';





export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryCards />
      <Zx9Highlight />
      <Zx7Speaker />
      <Yx1Earphones/>
      <BestGear/>
      <Footer/>


      {/* Add more sections here later */}
        
    </main>

    
  );

}


