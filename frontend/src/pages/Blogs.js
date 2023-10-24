import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Blogs() {
  const [blog, setBlog] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const baseUrl = 'http://localhost:3000';

  function getBlog() {
    fetch(`${baseUrl}/user/viewBlog`, {
      method: 'GET',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application.json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.blog);
        if (data && data.blog === "Token Expired") {
          window.localStorage.clear();
          window.location.href = './Admin';
        }
        setDataLoaded(true);
      });
  }
  
  useEffect(() => {
    if (!dataLoaded) {
      getBlog();
    }
  }, [dataLoaded]);

  return (
    <div className={dataLoaded ? "" : "h-screen"}>
      <Navbar />
      <div className="text-white text-5xl text-center py-10">
        ViewBlog
      </div>
      <div className="text-black">
        {blog.length === 0 ? ( // Check if there are no blogs
          <p className="text-center text-white text-2xl">Loading blogs...</p>
        ) : (
          blog.map((post) => (
            <div key={post._id} className="bg-white mt-10 mx-10 rounded-lg">
              <h2 className="text-center text-3xl underline font-bold py-5">{post.title}</h2>
              <h2 className="text-center font-semibold pl-28">By - {post.author}</h2>
              <p className="mx-10 text-justify py-10">{post.content}</p>
              <p className="text-right mx-2 py-10">Created on: {new Date(post.createdAt).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
