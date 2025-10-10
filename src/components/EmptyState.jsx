export default function EmptyState({title="Not Found", subtitle="Try different keywords"}) {
  return (
    <div className="text-center py-16">
      <img src="/src/assets/placeholder.png" alt="" className="mx-auto w-28 opacity-40" />
      <h3 className="text-xl mt-4">{title}</h3>
      <p className="opacity-70">{subtitle}</p>
    </div>
  );
}
