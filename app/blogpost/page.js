'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import header from '../components/header'
import Header from '../components/header'

const BLogPosts = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch("/api/blogs").then((a) => {
      return a.json();
    }).then((parsed) => {
      console.log(parsed);
      setBlogs(parsed);
    });
  }, [])

  return (
    <main>
      <Header></Header>
      <div>
        {blogs.map((blog) => (
          <div key={blog.slug}>
            <Link href={`blogpost/${blog.slug}`}><h2>{blog.title}</h2></Link>
            <p>{blog.content.substr(0,100)}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default BLogPosts
