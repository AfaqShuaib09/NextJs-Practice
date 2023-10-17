import blogData from './../blog/data/blogs.json';

export function fetchBlogs(id=null) {
    if (id) {
        return blogData.find(blog => blog.id === id);
    }
    return blogData;
}