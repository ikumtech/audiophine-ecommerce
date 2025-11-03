'use client';

import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    name: 'Headphones',
    image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
    link: '/category/headphones',
  },
  {
    name: 'Speakers',
    image: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
    link: '/category/speakers',
  },
  {
    name: 'Earphones',
    image: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
    link: '/category/earphones',
  },
];

export default function CategoryCards() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1110px] mx-auto px-6 flex flex-col md:flex-row gap-6 justify-between">
        {categories.map((cat) => (
          <div key={cat.name} className="bg-[#f1f1f1] rounded-lg w-full text-center py-10 relative">
            <div className="w-full flex justify-center">
              <Image
                src={cat.image}
                alt={cat.name}
                width={140}
                height={140}
                className="-mt-16"
              />
            </div>
            <h3 className="uppercase text-lg font-bold mt-6">{cat.name}</h3>
            <Link href={cat.link}>
              <span className="text-sm uppercase text-black/50 font-bold tracking-widest hover:text-primary mt-3 inline-block">
                Shop &rarr;
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
