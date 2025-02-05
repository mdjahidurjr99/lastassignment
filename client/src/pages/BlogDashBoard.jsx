import React, { useEffect, useState } from "react";
import BlogStore from "../store/BlogStore";

const BlogDashboard = () => {
  const { blogs, fetchBlogs, createBlog, updateBlog, deleteBlog, loading, error } =
  BlogStore();

  const [newBlog, setNewBlog] = useState({ title: "", content: "" });
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingBlog) {
      setEditingBlog({ ...editingBlog, [name]: value });
    } else {
      setNewBlog({ ...newBlog, [name]: value });
    }
  };

  const handleCreateBlog = (e) => {
    e.preventDefault();
    createBlog(newBlog);
    setNewBlog({ title: "", content: "" });
  };

  const handleUpdateBlog = (e) => {
    e.preventDefault();
    updateBlog(editingBlog._id, editingBlog);
    setEditingBlog(null);
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
  };

  const handleDeleteBlog = (id) => {
    deleteBlog(id);
  };

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Dashboard</h1>

      {/* ব্লগ তৈরি বা আপডেট করার ফর্ম */}
      <form
        onSubmit={editingBlog ? handleUpdateBlog : handleCreateBlog}
        className="bg-white p-6 rounded-lg shadow-md mb-6"
      >
        <h2 className="text-xl font-bold mb-4">
          {editingBlog ? "Edit Blog" : "Create New Blog"}
        </h2>
        <input
          type="text"
          name="title"
          value={editingBlog ? editingBlog.title : newBlog.title}
          onChange={handleInputChange}
          placeholder="Blog Title"
          className="w-full p-2 border rounded-lg mb-4"
          required
        />
        <textarea
          name="content"
          value={editingBlog ? editingBlog.content : newBlog.content}
          onChange={handleInputChange}
          placeholder="Blog Content"
          className="w-full p-2 border rounded-lg mb-4"
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          {editingBlog ? "Update Blog" : "Create Blog"}
        </button>
      </form>

      {/* ব্লগ লিস্ট */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Blogs</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {blogs.map((blog, i) => (
            <div key={i} className="mb-4 p-4 border rounded-lg shadow-sm">
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                {/* Image Section */}
                <img className="w-full h-56 object-cover" src={blog["image"]} alt="" />
                
                {/* Content Section */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900">{blog["title"]}</h3>
                  <p className="text-gray-600 mt-2">{blog["content"]}</p>
                  
                  {/* Read More Button */}
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    Read More
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <button
                  onClick={() => handleEditBlog(blog)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBlog(blog._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDashboard;