import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
  const posts = await fetch(DATA_SOURCE_URL).then(
    (res) => res.json()
    );
  return NextResponse.json(posts);
}

export async function PUT(req) {
    const {
        userId, title, body, id
    } = await req.json();
    if (!userId || !title || !body) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }
    const response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            userId,
            title,
            body,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const post = await response.json();
    return NextResponse.json(post);
}

export async function POST(req) {
    const {
        userId, title, body
    } = await req.json();
    if (!userId || !title || !body) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }
    const response = await fetch(DATA_SOURCE_URL, {
        method: "POST",
        body:   JSON.stringify({
            userId,
            title,
            body,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const post = await response.json();
    return NextResponse.json(post);
}

export async function DELETE(request) {
    const { id } = await request.json();
    if (!id) {
        return NextResponse.json({ message: "Missing id" }, { status: 400 });
        // return new Response("Missing id", { status: 400 });
    }
    const response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return NextResponse.json({ message: `Post ${id} deleted successfully` });
}

export const config = {
    api: {
        bodyParser: false,
    },
};