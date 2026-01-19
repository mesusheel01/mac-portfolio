import { Suspense } from "react";
import { BlogsList } from "./BlogList";
import { BlogsSkeleton } from "./BlogLoader";

export default function Blogs() {

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[#cecdc3] font-share-mono text-xl">Blogs...</h1>
      </div>
      <Suspense fallback={<BlogsSkeleton />}>
        {/* Async child component */}
        <BlogsList />
      </Suspense>
    </div>
  );
}
