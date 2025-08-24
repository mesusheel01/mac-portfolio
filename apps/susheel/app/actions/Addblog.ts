// app/actions/blog.ts
"use server";

export async function createBlog(title: string, description: string, imageUrl?: string) {
  const base =
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  const res = await fetch(`${base}/api/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_SECRET}`, // stays the same
    },
    body: JSON.stringify({
      title:title,
      description:description, // use description instead of content
      imageUrl: imageUrl || null, // send null if not provided
    }),
    cache: "no-store",
  });
  console.log(res);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Create blog failed: ${res.status} ${text}`);
  }
  return res.json();
}
