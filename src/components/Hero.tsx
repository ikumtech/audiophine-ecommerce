// src/components/Hero.tsx

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/hero-full.png"
           alt="XX99 Mark II Headphones"
            fill
            className="object-cover object-center md:object-[80%_center]"
            priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1110px] mx-auto px-6 py-32 md:py-40 text-white flex flex-col items-center md:items-start md:flex-row md:justify-between">

        {/* Text Content */}
        <div className="text-center md:text-left md:max-w-[398px] space-y-6">
          <p className="tracking-[10px] text-sm text-neutral-400">NEW PRODUCT</p>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold uppercase leading-tight">
            XX99 Mark II <br /> Headphones
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          {/* CTA Button */}
          <button className="bg-[#D87D4A] hover:bg-[#FBAF85] transition text-white text-sm font-bold tracking-[1px] uppercase px-8 py-4 mt-4">
            See Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;



