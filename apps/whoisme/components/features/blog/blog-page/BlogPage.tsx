'use client'

import { useRouter } from "next/navigation";
import { Backspace } from 'geist-icons'
import { motion } from 'motion/react'

interface BlogType {
    id: number;
    title: string;
    description: string;
    imageUrl: string | null;
}

export default function BlogPage({ blog }: { blog: BlogType }) {
    const router = useRouter()
    return (
        <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center">
            <motion.div
                layoutId={`blog-${blog.id}`}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.5, 1] }}
                className="max-w-[700px] m-4 flex flex-col gap-6 p-6 w-full bg-bg-primary/90 backdrop-blur-sm rounded-3xl"
            >
                {/* Content Section */}
                <button
                    onClick={() => router.push("/")}
                    className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-[2px]">
                    <Backspace />
                </button>
                <div className="rounded-3xl">
                    {/* Title */}
                    <h1 className="text-xl md:text-2xl font-bold text-text-primary mb-6 font-share-mono">
                        {blog.title}
                    </h1>

                    {/* Description with preserved formatting */}
                    <div className="text-text-secondary text-base md:text-md leading-relaxed font-sono">
                        <p className="whitespace-pre-wrap">{blog.description}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}