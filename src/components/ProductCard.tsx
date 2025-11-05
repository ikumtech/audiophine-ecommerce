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
    <section className="max-w-[1110px] mx-auto px-6 md:px-10 lg:px-0 py-20">
      <div
        className={`flex flex-col items-center gap-10 md:gap-16 lg:gap-24 lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 bg-neutral-100 rounded-lg flex justify-center items-center h-[352px] md:h-[400px] lg:h-[560px]">
          <Image
            src={image}
            alt={title}
            className="object-contain w-[220px] md:w-[300px] lg:w-[400px] xl:w-[450px]"
            priority
          />
        </div>

        {/* TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left max-w-lg space-y-6">
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
            className="inline-block bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 mt-4 uppercase text-sm tracking-wider transition-colors duration-200"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
}
