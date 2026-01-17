import { Suspense } from "react";
import { BlogsList } from "./BlogList";
import { BlogsSkeleton } from "./BlogLoader";

export default function Blogs() {

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-purple-400 font-share-mono text-xl">Blogs...</h1>
       
      </div>
      <Suspense fallback={<BlogsSkeleton />}>
        {/* Async child component */}
        <BlogsList />
      </Suspense>
    </div>
  );
}
