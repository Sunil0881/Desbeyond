import { useState } from "react";
import { Link } from "react-router-dom";

function AddBlog() {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [content,setContent] = useState('');
    const baseUrl = 'https://desbeyond-backend.vercel.app';

    function logOut(){
        localStorage.clear();
        window.location.href='./Admin';
      }

    function Post(){
        const _title = document.getElementById('title').value;
        const _author = document.getElementById('author').value;
        const _content = document.getElementById('content').value;

        if (!_title || !_author || !_content) {
        alert('Please fill in all fields before posting.');
        } else {
            setTitle('');
            setAuthor('');
            setContent('');
        }
        fetch(`${baseUrl}/user/postBlog`, {
            method: 'POST',
            crossDomain: true,
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
              title,
              author,
              content,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              alert("Successfully Posted.");
              window.location.href='./Dashboard';
            });
    }
    return ( 
        <div className=" pb-5">
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
            <div className="text-center text-white text-5xl my-10">
                AddBlog
            </div>
            <div className="flex flex-col mx-10 md:mx-96">
                    <input type="text" id="title" placeholder="Title" onChange={(e)=> setTitle(e.target.value)} className="w-full my-5 h-10 rounded-3xl text-center" required />
                    <input type="text" id="author" placeholder="Author" onChange={(e)=> setAuthor(e.target.value)} className="w-full my-5 h-10 rounded-3xl text-center" required />
                    <textarea rows={10} id="content" placeholder="Content" className="w-full my-5 p-5 rounded-xl" onChange={(e)=> setContent(e.target.value)} />
                    <button onClick={Post}  className="bg-red-600 h-10 w-full rounded-3xl text-white hover:bg-red-700 ">
                        Post
                    </button>
                </div>
                
        </div>
    
    );
}

export default AddBlog;