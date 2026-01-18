'use client'

interface BlogType {
    id: number;
    title: string;
    description: string;
    imageUrl: string | null;
}

export default function BlogPage({ blog }: { blog: BlogType }) {
    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center">
            <div className="max-w-2xl w-full">
                {/* Content Section */}
                <div className="bg-neutral-900 rounded-2xl shadow-2xl p-6 md:p-8 m-4">
                    {/* Title */}
                    <h1 className="text-xl md:text-2xl font-bold text-purple-400 mb-6 font-share-mono">
                        {blog.title}
                    </h1>

                    {/* Description with preserved formatting */}
                    <div className="text-neutral-400 text-base md:text-md leading-relaxed font-sono">
                        <p className="whitespace-pre-wrap">{blog.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}