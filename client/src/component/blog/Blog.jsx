import React from "react";
import BlogStore from "../../store/BlogStore";

const Blog = () => {
  const { blogList } = BlogStore();
  
  if (blogList === null) {
    return <div>Blog Loading...</div>;
  } else {
    return (
      <div className="p-6">
        <h1 className="text-[50px] font-bold text-center">Our Blog</h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {blogList.map((item, i) => {
            return (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                {/* Image Section */}
                <img className="w-full h-56 object-cover" src={item["image"]} alt="" />
                
                {/* Content Section */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900">{item["title"]}</h3>
                  <p className="text-gray-600 mt-2">{item["content"]}</p>
                  
                  {/* Read More Button */}
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Blog;
