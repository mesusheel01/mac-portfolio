export function BlogsSkeleton() {
  return (
    <div className="mt-4 space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-20 w-full bg-neutral-800 animate-pulse rounded-md"
        ></div>
      ))}
    </div>
  );
}
