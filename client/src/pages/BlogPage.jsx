import React, { useEffect } from "react";
import Blog from "../component/blog/Blog";
import Layout from "../component/layout/Layout";
import BlogStore from "../store/BlogStore";

const BlogPage = () => {
    const {blogListRequest} = BlogStore()

    useEffect(()=>{
        (async()=>{
            await blogListRequest()
        })()
    },[])
  return (
    <Layout>
      <Blog />
    </Layout>
  );
};

export default BlogPage;
