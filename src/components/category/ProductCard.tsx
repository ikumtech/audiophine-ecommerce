// src/components/category/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  image: string; // Using string for /public asset path
  slug: string;
  isNew?: boolean;
  reverse?: boolean;
};

export default function ProductCard({
  title,
  description,
  image,
  slug,
  isNew = false,
  reverse = false,
}: Props) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? 'lg:flex-row-reverse' : ''
      } items-center gap-10`}
    >
      {/* Image */}
      <div className="bg-neutral-100 rounded-lg p-6 flex justify-center w-full max-w-[540px]">
        <Image
          src={image}
          alt={title}
          width={540}
          height={560}
          className="rounded-lg object-contain"
        />
      </div>

      {/* Content */}
      <div className="text-center lg:text-left max-w-lg space-y-6">
        {isNew && (
          <p className="text-sm text-orange-500 tracking-[10px] uppercase">
            New Product
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight">
          {title}
        </h2>
        <p className="text-gray-500 leading-relaxed">{description}</p>

        <Link
          href={slug}
          className="inline-block bg-orange-500 text-white px-8 py-3 mt-4 uppercase text-sm tracking-wider hover:bg-orange-400 transition"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
