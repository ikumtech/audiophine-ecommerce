import Image from 'next/image';

export default function Yx1Earphones() {
  return (
    <section className="mt-8 px-6 md:px-0">
      <div className="max-w-[1110px] mx-auto grid md:grid-cols-2 gap-6">
        
        {/* Image block */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/assets/home/image-earphones-yx1.png"
            alt="YX1 Earphones"
            width={540}
            height={320}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Text Block */}
        <div className="bg-[#f1f1f1] rounded-lg flex items-center px-6 md:px-16">
          <div>
            <h2 className="text-[28px] font-bold uppercase mb-6 tracking-wide">YX1 Earphones</h2>
            <button className="bg-transparent border border-black text-black hover:bg-black hover:text-white uppercase text-sm font-bold tracking-wider px-6 py-3 transition-all duration-200">
              See Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
