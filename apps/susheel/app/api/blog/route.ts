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
    const { title, description, imageUrl } = await request.json();
    const created = await pc.blog.create({
      data: { title, description, imageUrl },
    });

    if (!created) {
      return NextResponse.json({ msg: "Failed to create blog" }, { status: 400 });
    }

    return NextResponse.json({ msg: "Blog has been successfully created!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: "Internal server error!" }, { status: 500 });
  }
}
