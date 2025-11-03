// src/components/home/BestGear.tsx
'use client';

import Image from 'next/image';

const BestGear = () => {
  return (
    <section className="px-6 md:px-10 lg:px-[165px] mt-24 mb-32">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-28">
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-[28px] md:text-[40px] lg:text-[40px] font-bold uppercase leading-tight tracking-[1px]">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
          </h2>
          <p className="mt-6 text-black/70 text-[15px] leading-[25px]">
            Located in the heart of New York City, Audiophile is the premier store for high-end headphones, earphones,
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you
            to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic
            people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/shared/desktop/image-best-gear.png"
            alt="Man listening with headphones"
            width={540}
            height={588}
            className="w-full rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default BestGear;
