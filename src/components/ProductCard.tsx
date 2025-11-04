// components/ProductCard.tsx
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
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
    <div className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} items-center gap-10`}>
      <div className="bg-neutral-100 rounded-lg p-4">
        <Image src={image} alt={title} className="rounded-lg w-full h-auto" />
      </div>
      <div className="text-center lg:text-left max-w-lg space-y-6">
        {isNew && (
          <p className="text-sm text-orange-500 tracking-widest">NEW PRODUCT</p>
        )}
        <h2 className="text-3xl font-bold uppercase">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <Link
          href={slug}
          className="inline-block bg-orange-500 text-white px-6 py-3 mt-4 uppercase text-sm tracking-wider hover:bg-orange-400 transition"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
