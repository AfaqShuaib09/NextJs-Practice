import React from "react";

export default async function Posts({ params }) {
  const postId = params.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { cache: "no-cache" }
  );
  // { cache: "force-cache" } - Static Generation with Data
  // { cache: "no-cache" } - Server-side Rendering with Data
  // { next: { revalidate: 60 } } - Incremental Static Regeneration
  const posts = await res.json();

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Post #{posts.id}</h1>
          <h2 className="card-subtitle mb-2">{posts.title}</h2>
          <p className="card-text">{posts.body}</p>
        </div>
      </div>
    </div>
  );
}
