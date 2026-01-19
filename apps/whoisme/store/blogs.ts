import { create } from 'zustand';

export interface BlogType {
    id: number;
    title: string;
    description: string;
    imageUrl: string | null;
}

// Single Blog Store (for blog detail pages)
interface SingleBlogStore {
    blogItem: BlogType | null;
    setBlog: (blogItem: BlogType | null) => void;
    clearBlog: () => void;
}

export const useBlogStore = create<SingleBlogStore>((set) => ({
    blogItem: null, // Initial state as null

    // Action to set a single blogItem
    setBlog: (blogItem: BlogType | null) => set({ blogItem }),

    // Action to clear the blogItem
    clearBlog: () => set({ blogItem: null }),
}));
