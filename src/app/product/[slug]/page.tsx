// app/product/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    slug: 'xx99-mark-two',
    title: 'XX99 Mark II Headphones',
    isNew: true,
    price: 2999,
    description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    features: 'Featuring genuine leather head strap and premium earcups...',
    inBox: [
      { quantity: 1, item: 'Headphone Unit' },
      { quantity: 2, item: 'Replacement Earcups' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm Audio Cable' },
      { quantity: 1, item: 'Travel Bag' },
    ],
    images: {
      main: '/assets/products/Group 3.png',
      gallery: [
        '/assets/products/Group 3.png',
        '/assets/products/Group 3.png',
        '/assets/products/Group 3.png',
      ],
    },
    others: [
      { title: 'XX99 Mark I', slug: 'xx99-mark-one', image: '/assets/products/Group 3 (1).png' },
      { title: 'XX59', slug: 'xx59', image: '/assets/products/Group 3 (2).png' },
      { title: 'ZX9 Speaker', slug: 'zx9-speaker', image: '/assets/products/ZX9 Speaker.png' },
    ],
  },

  {
    slug: 'xx99-mark-one',
    title: 'XX99 Mark I Headphones',
    isNew: false,
    price: 1750,
    description: 'The classic XX99 Mark I offers detailed and accurate audio reproduction...',
    features: 'Memory foam cushions, robust metal headband...',
    inBox: [
      { quantity: 1, item: 'Headphone Unit' },
      { quantity: 2, item: 'Replacement Earcups' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm Audio Cable' },
    ],
    images: {
      main: '/assets/products/Group 3 (1).png',
      gallery: [
        '/assets/products/Group 3 (1).png',
        '/assets/products/Group 3 (1).png',
        '/assets/products/Group 3 (1).png',
      ],
    },
    others: [
      { title: 'XX99 Mark II', slug: 'xx99-mark-two', image: '/assets/products/Group 3.png' },
      { title: 'XX59', slug: 'xx59', image: '/assets/products/Group 3 (2).png' },
      { title: 'ZX9 Speaker', slug: 'zx9-speaker', image: '/assets/products/ZX9 Speaker.png' },
    ],
  },

  {
    slug: 'xx59',
    title: 'XX59 Headphones',
    isNew: false,
    price: 899,
    description: 'Customize it to your tastes with the XX59 headphones...',
    features: 'Durable and stylish wireless headset...',
    inBox: [
      { quantity: 1, item: 'Headphone Unit' },
      { quantity: 2, item: 'Replacement Earcups' },
      { quantity: 1, item: '3.5mm Audio Cable' },
    ],
    images: {
      main: '/assets/products/Group 3 (2).png',
      gallery: [
        '/assets/products/Group 3 (2).png',
        '/assets/products/Group 3 (2).png',
        '/assets/products/Group 3 (2).png',
      ],
    },
    others: [
      { title: 'XX99 Mark II', slug: 'xx99-mark-two', image: '/assets/products/Group 3.png' },
      { title: 'ZX9 Speaker', slug: 'zx9-speaker', image: '/assets/products/ZX9 Speaker.png' },
      { title: 'ZX7 Speaker', slug: 'zx7-speaker', image: '/assets/products/ZX7 Speaker.png' },
    ],
  },

  {
    slug: 'zx9-speaker',
    title: 'ZX9 Speaker',
    isNew: true,
    price: 4500,
    description: 'Upgrade your sound system with ZX9 active speakers...',
    features: 'Bluetooth, Optical input, Full sound clarity...',
    inBox: [
      { quantity: 2, item: 'Speaker Unit' },
      { quantity: 1, item: 'Cloth Panel' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '10m Optical Cable' },
    ],
    images: {
      main: '/assets/products/ZX9 Speaker.png',
      gallery: [
        '/assets/products/ZX9 Speaker.png',
        '/assets/products/ZX9 Speaker.png',
        '/assets/products/ZX9 Speaker.png',
      ],
    },
    others: [
      { title: 'ZX7 Speaker', slug: 'zx7-speaker', image: '/assets/products/ZX7 Speaker.png' },
      { title: 'XX99 Mark I', slug: 'xx99-mark-one', image: '/assets/products/Group 3 (1).png' },
      { title: 'XX59', slug: 'xx59', image: '/assets/products/Group 3 (2).png' },
    ],
  },

  {
    slug: 'zx7-speaker',
    title: 'ZX7 Speaker',
    isNew: false,
    price: 3500,
    description: 'Stream high-quality sound wirelessly...',
    features: 'Flat diaphragm tweeter, Optical cable included...',
    inBox: [
      { quantity: 2, item: 'Speaker Unit' },
      { quantity: 2, item: 'Cloth Panel' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '7.5m Optical Cable' },
    ],
    images: {
      main: '/assets/products/ZX7 Speaker.png',
      gallery: [
        '/assets/products/ZX7 Speaker.png',
        '/assets/products/ZX7 Speaker.png',
        '/assets/products/ZX7 Speaker.png',
      ],
    },
    others: [
      { title: 'ZX9 Speaker', slug: 'zx9-speaker', image: '/assets/products/ZX9 Speaker.png' },
      { title: 'XX59', slug: 'xx59', image: '/assets/products/Group 3 (2).png' },
      { title: 'YX1', slug: 'yx1-earphones', image: '/assets/products/YX1 Earphones.png' },
    ],
  },

  {
    slug: 'yx1-earphones',
    title: 'YX1 Wireless Earphones',
    isNew: true,
    price: 599,
    description: 'Tailor your listening with bespoke dynamic drivers...',
    features: 'Compact, long battery, USB-C charging...',
    inBox: [
      { quantity: 2, item: 'Earphone Unit' },
      { quantity: 6, item: 'Earplugs' },
      { quantity: 1, item: 'USB-C Charging Cable' },
      { quantity: 1, item: 'Travel Pouch' },
    ],
    images: {
      main: '/assets/products/YX1 Earphones.png',
      gallery: [
        '/assets/products/YX1 Earphones.png',
        '/assets/products/YX1 Earphones.png',
        '/assets/products/YX1 Earphones.png',
      ],
    },
    others: [
      { title: 'ZX9 Speaker', slug: 'zx9-speaker', image: '/assets/products/ZX9 Speaker.png' },
      { title: 'XX99 Mark I', slug: 'xx99-mark-one', image: '/assets/products/Group 3 (1).png' },
      { title: 'XX59', slug: 'xx59', image: '/assets/products/Group 3 (2).png' },
    ],
  },
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <div className="px-6 py-20 max-w-5xl mx-auto">
      <button onClick={() => history.back()} className="mb-6 text-gray-500 hover:underline">
        Go Back
      </button>

      {/* Product Overview */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Image
          src={product.images.main}
          alt={product.title}
          width={500}
          height={500}
          className="rounded-lg object-contain"
        />

        <div>
          {product.isNew && (
            <p className="uppercase text-orange-500 text-sm tracking-widest mb-2">New Product</p>
          )}
          <h1 className="text-3xl font-bold uppercase mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-xl font-bold mb-6">${product.price}</p>

          <button className="bg-orange-500 text-white px-6 py-3 uppercase text-sm hover:bg-orange-400">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Features and In The Box */}
      <div className="mt-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold uppercase mb-4">Features</h2>
          <p className="text-gray-600">{product.features}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold uppercase mb-4">In the Box</h2>
          <ul className="space-y-2">
            {product.inBox.map((item, i) => (
              <li key={i}>
                <span className="text-orange-500 font-bold mr-2">{item.quantity}x</span>
                <span>{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* You may also like */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold uppercase text-center mb-10">You may also like</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {product.others.map((item) => (
            <div key={item.slug} className="text-center">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="mx-auto rounded-md"
              />
              <p className="mt-4 font-bold uppercase">{item.title}</p>
              <Link
                href={`/product/${item.slug}`}
                className="inline-block mt-3 px-5 py-2 bg-orange-500 text-white text-sm uppercase hover:bg-orange-400 transition"
              >
                See Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
