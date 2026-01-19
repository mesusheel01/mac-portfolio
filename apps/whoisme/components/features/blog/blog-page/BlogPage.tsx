'use client'

import { useRouter } from "next/navigation";

interface BlogType {
    id: number;
    title: string;
    description: string;
    imageUrl: string | null;
}

export default function BlogPage({ blog }: { blog: BlogType }) {
    const router = useRouter()
    return (
        <div className="min-h-screen bg-[#100f0f] flex flex-col items-center justify-center">
            <div className="max-w-[700px] m-5 w-full">
                {/* Content Section */}

                <div className="rounded-3xl">
                    {/* Title */}
                    <h1 className="text-xl md:text-2xl font-bold text-neutral-300 mb-6 font-share-mono">
                        {blog.title}
                    </h1>

                    {/* Description with preserved formatting */}
                    <div className="text-neutral-500 text-base md:text-md leading-relaxed font-sono">
                        <p className="whitespace-pre-wrap">{blog.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}