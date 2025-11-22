// app/actions/blog.ts
"use server";

import { prismaClient } from "@repo/db";

export async function createBlog(title: string, description: string, imageUrl?: string) {
  try {
    const existingBlog = await prismaClient.blog.findUnique({
      where: { title },
    });

    if (existingBlog) {
      throw new Error("Title already exists");
    }

    const created = await prismaClient.blog.create({
      data: {
        title,
        description,
        imageUrl: imageUrl || null,
      },
    });

    return { msg: "Blog has been successfully created!", blog: created };
  } catch (error: any) {
    console.error("Error creating blog:", error);
    throw new Error(error.message || "Failed to create blog");
  }
}
