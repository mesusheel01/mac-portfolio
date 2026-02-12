'use client'
import BlogPage from "@/components/features/blog/blog-page/BlogPage";
import { useBlogStore } from "@/store/blogs";


export default function Page({
    params,
}: {
    params: { blogid: string };
}) {

    const { blogItem } = useBlogStore()
    // Use .find() to get a single blog object, not .map()

    if (!blogItem) {
        return <div className="bg-bg-primary min-h-screen text-text-secondary flex items-center justify-center text-xl font-sono">No blogs found!</div>
    }

    return (
        <div>
            <BlogPage blog={blogItem} />
        </div>
    );
}
