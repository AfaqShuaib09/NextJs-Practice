import { NextResponse } from "next/server";
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET(request) {
  const id = request.url.slice( request.url.lastIndexOf("/") + 1 );
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const post = await res.json();
  if (!post) {
    return NextResponse({ message: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}
