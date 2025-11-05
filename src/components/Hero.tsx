import Image from "next/image";
import Link from "next/link";
//import heroBg from "@/public/assets/home/desktop/image-hero.jpg"; // full background image

const Hero = () => {
  return (
    <section className="relative w-full h-[730px] text-white overflow-hidden">
      {/* Background image */}
       <Image
        src="/assets/home/hero-full.png"
        alt="Hero Background"
        fill
        className="object-cover object-center opacity-80"
        priority
      />

      {/* Optional black overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text Content */}
      <div className="relative z-20 h-full max-w-screen-xl mx-auto px-6 flex flex-col justify-center items-center text-center md:items-start md:text-left">
        <p className="text-sm tracking-[10px] text-white/60 mb-4">
          NEW PRODUCT
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          XX99 MARK II <br /> HEADPHONES
        </h1>
        <p className="text-white/80 max-w-md mb-8">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
       <Link href="/product/xx99-mark-two">
            <button className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 uppercase tracking-wider text-sm">
              See Product
            </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

