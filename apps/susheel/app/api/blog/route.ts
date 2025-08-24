import { NextResponse } from "next/server";
import { prismaClient } from "@repo/db";

const pc = prismaClient;
// utility function

export function checkAuth(request: Request) {
    const authHeader = request.headers.get("authorization");
    return authHeader === `Bearer ${process.env.API_SECRET}`;
  }


export async function GET(request: Request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const blogs = await pc.blog.findMany();
    if (blogs.length === 0) {
      return NextResponse.json({ msg: "No blogs found!" }, { status: 200 });
    }
    return NextResponse.json({ allBlogs: blogs }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: "Internal server error!" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    const { title, description, imageUrl } = body;
    const existingBlog = await pc.blog.findUnique({
      where: { title },
    });

    if (existingBlog) {
      return NextResponse.json({ error: "Title already exists" }, { status: 400 });
    }

    const created = await pc.blog.create({
      data: { title, description, imageUrl },
    });

    return NextResponse.json({ msg: "Blog has been successfully created!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: "Internal server error!" }, { status: 500 });
  }
}
