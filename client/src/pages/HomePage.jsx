import React, { useEffect } from 'react'
import Layout from '../component/layout/Layout'
import HeroSection from '../component/layout/HeroSection'
import Blog from '../component/blog/Blog'
import BlogStore from '../store/BlogStore'

const HomePage = () => {
  const {blogListRequest} = BlogStore()

    useEffect(()=>{
        (async()=>{
            await blogListRequest()
        })()
    },[])
  return (
    <Layout>
        <HeroSection/>
        <Blog/>
    </Layout>
  )
}

export default HomePage