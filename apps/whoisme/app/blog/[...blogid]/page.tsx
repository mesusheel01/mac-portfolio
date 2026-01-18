import BlogPage from "@/components/features/blog/blog-page/BlogPage";
import { prismaClient } from "@repo/db";


export default async function Page({
    params,
}: {
    params: { blogid: string };
}) {


    const { blogid } = await params
    const idx = blogid[0]


    const blog = await prismaClient.blog.findUnique({
        where: { id: Number(idx) },
    });
    console.log(blog)

    if (!blog) {
        throw new Error("Blog not found");
    }

    return (
        <div>
            <BlogPage blog={blog} />
        </div>
    );
}
