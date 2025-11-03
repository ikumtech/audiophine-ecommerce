import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[729px] bg-black overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/home/hero-full.png"
        alt="Hero Headphones"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 max-w-[1110px] mx-auto px-6 h-full flex flex-col justify-center items-start md:items-center text-left md:text-center">
        <p className="uppercase tracking-[10px] text-sm text-white/60 mb-4">
          New Product
        </p>
        <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight text-white mb-6">
          XX99 Mark II <br /> Headphones
        </h1>
        <p className="text-white/75 max-w-md mb-8">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <button className="bg-[#D87D4A] text-white px-8 py-3 uppercase text-sm tracking-wider hover:bg-[#fbaf85] transition">
          See Product
        </button>
      </div>
    </section>
  );
};

export default Hero;
