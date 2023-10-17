export async function GET() {
    return new Response("Hello World!");
}

export async function POST(req) {
    const body = await req.json();
    console.log(body);
    return new Response(JSON.stringify(body));
}

export const config = {
    api: {
        bodyParser: false,
    },
};