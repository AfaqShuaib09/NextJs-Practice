import React from "react";
import "./styles/index.css";
import { fetchBlogs } from "../utils/fetchBlogs";
import Link from "next/link";

function Blog() {
  const blogs = fetchBlogs();
  return (
    <div className="home" style={{ backgroundColor: "transparent" }}>
      <header>
        <h1>Welcome to My Blog</h1>
        <p>Explore our latest blog posts below:</p>
      </header>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-post" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Author: {blog.author}</p>
            <p>Date: {blog.date}</p>
            <p>Summary: {blog.summary}</p>
            <Link href={`/blog/${blog.id}`}>
              <button className="btn btn-primary">Read More</button>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/blog/new">
          <button className="px-4 py-2 bg-blue-500 rounded">
            Create New Post
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
