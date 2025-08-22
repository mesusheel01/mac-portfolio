import { Suspense } from "react";
import { BlogsList } from "./BlogList";
import { BlogsSkeleton } from "./BlogLoader";

export default function Blogs() {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-purple-400 font-share-mono text-xl">Blogs...</h1>
        <button className="bg-neutral-400 hover:bg-purple-400 transition-colors duration-300 ease-in-out text-black px-2 py-2 rounded-xl font-sono text-sm">
          Add Blog
        </button>
      </div>
      <Suspense fallback={<BlogsSkeleton />}>
        {/* Async child component */}
        <BlogsList />
      </Suspense>
    </div>
  );
}
