// src/components/ProductCard.tsx
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  reverse?: boolean;
}

export default function ProductCard({ title, description, image, alt, reverse = false }: ProductCardProps) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8 my-20`}>
      <div className="w-full md:w-1/2">
        <Image
          src={image}
          alt={alt}
          width={500}
          height={500}
          className="w-full object-contain rounded-md"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-sm text-orange-500 tracking-widest mb-4">NEW PRODUCT</h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="bg-orange-500 text-white px-6 py-3 uppercase tracking-wider">
          See Product
        </button>
      </div>
    </div>
  );
}
