import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Dashboard() {
  const [userdata, setUserData] = useState("");
  const [blog, setBlog] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const baseUrl = 'http://localhost:3000';

  function logOut(){
    localStorage.clear();
    window.location.href='./Admin';
  }

  function getDetail() {
    fetch(`${baseUrl}/auth/userDetail`, {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        token: window.localStorage.getItem('token'),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data !== null && data !== undefined) {
          setUserData(data);
          console.log(userdata);
        }
        if (data && data.data === "Token Expired") {
          window.localStorage.clear();
          window.location.href = './Admin';
        }
        setDataLoaded(true);
      });
  }

  function getBlog() {
    fetch(`${baseUrl}/user/viewBlog`, {
      method: 'GET',
      crossDomain: true,
      headers: {
        'Content-Type': 'application.json',
        Accept: 'application/json',
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

  const handleDeleteBlog = async (blogId) => {
    try {
      const response = await fetch(`${baseUrl}/user/deleteBlog/${blogId}`, {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      if (response.status === 200) {
        const updatedBlog = blog.filter((post) => post._id !== blogId);
        setBlog(updatedBlog);
      }
      alert("Blog Successfully Deleted");
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  }

  useEffect(() => {
    if (!dataLoaded) {
      getBlog();
      getDetail();
    }
  }, [dataLoaded]);

  return (
    <div className={dataLoaded ? "" : "h-screen"}>
      <div className="flex justify-between px-2 bg-white text-black py-4 items-center">
        <div className="text-2xl">
          Desbeyond
        </div>
        <div className="list-none flex">
          <Link to={'/Dashboard'}><li className="mx-2 uppercase cursor-pointer">ViewBlog</li></Link>
          <Link to={'/AddBlog'}><li className="mx-2 uppercase cursor-pointer">AddBlog</li></Link>
          <button onClick={logOut} className="mx-2 uppercase cursor-pointer">Logout</button>
        </div>
      </div>
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
              <button
                className="my-5 mx-2 bg-red-500 hover:bg-red-600 px-2 rounded-xl text-center text-white"
                onClick={() => handleDeleteBlog(post._id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
      <div className="py-10"></div>
    </div>
  );
}

export default Dashboard;
