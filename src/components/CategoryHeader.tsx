// components/shared/CategoryHeader.tsx
export default function CategoryHeader({ title }: { title: string }) {
  return (
    <section className="bg-black text-white py-20 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest uppercase">
        {title}
      </h1>
    </section>
  );
}
