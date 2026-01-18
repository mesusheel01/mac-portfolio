'use client'
interface BlogType {
    id: number;
    title: string;
    description: string;
    imageUrl: string | null;
}
export default function BlogPage({ blog }: { blog: BlogType }) {
    return <div>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        <p>{blog.imageUrl}</p>
    </div>
}