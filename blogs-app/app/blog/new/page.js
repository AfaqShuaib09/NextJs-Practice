"use client";
import React from "react";
import { useRouter } from "next/navigation";

function NewPost() {
  const router = useRouter();
  return (
    <div className="container mt-5">
      <h1>Create New Post</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" id="title" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input type="text" id="author" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input type="date" id="date" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="summary" className="form-label">
            Summary
          </label>
          <textarea id="summary" className="form-control"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea id="content" className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Create Post
        </button>
      </form>
      
      <br />
      <div className="border-top pt-3">
        <button onClick={() => router.back()} className="btn btn-secondary">
          Back
        </button>
      </div>
    </div>
  );
}

export default NewPost;
