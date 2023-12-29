'use client'
import React, { useState, useEffect } from 'react';

function Slug({ params }) {
  const [blog, setBlog] = useState();

  useEffect(() => {
    const slug = params.slug;  
    fetch(`http://localhost:3000/api/getblog?page=${slug}`)
      .then((a) => a.json())
      .then((parsed) => {
        setBlog(parsed);
      });
  }, [params.slug]); 

  return (
    <div>
      <h1>{blog && blog.title}</h1>
      <p>{blog && blog.content}</p>
    </div>
  );
}

export default Slug;
