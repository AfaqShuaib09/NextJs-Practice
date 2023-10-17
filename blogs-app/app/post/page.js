import React from 'react'

export default async function Posts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { cache: "force-cache" });
    const posts = await res.json();

    return (
        <div className="container mt-5">
            <h1>Posts</h1>
            <ul className="list-group">
                {posts.map((post) => (
                    <li key={post.id} className="list-group-item">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}