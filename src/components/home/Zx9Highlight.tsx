'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Zx9Highlight() {
  return (
    <section className="py-20">
      <div className="max-w-[1110px] mx-auto px-6">
        <div className="bg-primary rounded-lg overflow-hidden flex flex-col lg:flex-row items-center px-10 lg:px-20 py-14 text-white relative">
          
          {/* Product Image */}
          <div className="mb-10 lg:mb-0 lg:mr-16">
            <Image
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              width={410}
              height={493}
              className="object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-md">
            <h2 className="uppercase text-[40px] md:text-[56px] font-bold leading-tight">
              ZX9 <br /> Speaker
            </h2>
            <p className="mt-6 mb-10 text-white/75 text-base leading-relaxed">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link href="/product/zx9-speaker">
              <button className="bg-black hover:bg-dark text-white uppercase text-sm tracking-wider px-6 py-4 font-bold">
                See Product
              </button>
            </Link>
          </div>

          {/* Decorative Circles */}
          <div className="absolute inset-0">
            <Image
              src="/assets/home/desktop/Oval.png"
              alt=""
              width={944}
              height={944}
              className="absolute -top-20 left-1/2 -translate-x-1/2 pointer-events-none opacity-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
