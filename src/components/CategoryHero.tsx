// components/CategoryHero.tsx
export default function CategoryHero({ title }: { title: string }) {
  return (
    <section className="bg-black text-white py-24 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest">
        {title}
      </h1>
    </section>
  );
}