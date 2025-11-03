import Image from 'next/image';

export default function Zx7Speaker() {
  return (
    <section className="mt-12 px-6 md:px-0">
      <div className="max-w-[1110px] mx-auto">
        <div className="relative rounded-lg overflow-hidden h-[320px] md:h-[320px]">
          {/* Background Image */}
          <Image
            src="/assets/home/image-speaker-zx7.png"
            alt="ZX7 Speaker"
            fill
            className="object-cover rounded-lg"
            priority
          />

          {/* Text Content Overlay */}
          <div className="absolute top-1/2 left-6 md:left-20 -translate-y-1/2 z-10">
            <h2 className="text-2xl font-bold uppercase mb-6 tracking-wide">ZX7 Speaker</h2>
            <button className="bg-transparent border border-black text-black hover:bg-black hover:text-white uppercase text-sm font-bold tracking-wider px-6 py-3 transition-all duration-200">
              See Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
