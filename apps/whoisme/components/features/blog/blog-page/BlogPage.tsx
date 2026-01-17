'use client'
interface BlogType {
    id: Number;
    title: String;
    description: String;
    imageUrl: String;
}
export default function BlogPage({ blog }: { blog: BlogType }) {
    return <div>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        <p>{blog.imageUrl}</p>
    </div>
}