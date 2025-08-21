import { Suspense } from "react";
import { BlogsList } from "./BlogList";
import { BlogsSkeleton } from "./BlogLoader";

export default function Blogs() {
  return (
    <div>
      <h1 className="text-purple-400 font-share-mono text-xl">Blogs...</h1>
      <Suspense fallback={<BlogsSkeleton />}>
        {/* Async child component */}
        <BlogsList />
      </Suspense>
    </div>
  );
}
