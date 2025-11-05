export async function getProductBySlug(slug: string) {
  const products = [
    {
      slug: 'xx99-mark-two',
      name: 'XX99 Mark II Headphones',
      description: 'The new XX99 Mark II headphones...',
      price: 2999,
      isNew: true,
      image: '/assets/products/Group 3.png',
      features: `Feature 1\nFeature 2`,
      inTheBox: [
        { item: 'Headphone Unit', quantity: 1 },
        { item: 'User Manual', quantity: 1 },
      ],
      gallery: [
        '/assets/gallery/img1.png',
        '/assets/gallery/img2.png',
        '/assets/gallery/img3.png',
      ],
    },
    // More products...
  ];

  return products.find(p => p.slug === slug);
}
