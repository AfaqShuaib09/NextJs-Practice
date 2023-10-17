'use client'
import { useParams } from 'next/navigation'
import { fetchBlogs } from "../../utils/fetchBlogs";
 
export default function SinglePost() {
  const params = useParams()
  const blog = fetchBlogs(parseInt(params.blogId));

    return (
        <div className="container mt-5">
            <h1>{blog.title}</h1>
            <p>Author: {blog.author}</p>
            <p>Date: {blog.date}</p>
            <p>Summary: {blog.summary}</p>
        </div>
    )
}
