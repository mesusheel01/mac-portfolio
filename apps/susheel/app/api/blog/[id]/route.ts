import { NextResponse, type NextRequest } from "next/server";
import { prismaClient } from "@repo/db";
import { checkAuth } from "../route";

const pc = prismaClient;

export async function PUT(request: NextRequest, context: { params: { id: string } }): Promise<NextResponse> {
  const { params } = context;

  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const id = Number(params.id);
    const { title, description } = await request.json();

    const updatedPost = await pc.blog.update({
      where: { id },
      data: { title, description },
    });

    return NextResponse.json({ msg: "Updated blog", updatedPost }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: "Internal server error!" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, context: { params: { id: string } }): Promise<NextResponse> {
  const { params } = context;

  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const id = Number(params.id);
    await pc.blog.delete({ where: { id } });

    return NextResponse.json({ msg: "The post has been successfully deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: "Internal server error!" }, { status: 500 });
  }
}
