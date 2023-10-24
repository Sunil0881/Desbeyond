import React,{ useState } from "react";

function Admin() {
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const baseUrl = 'http://localhost:3000';

    function loginHandler(){
      const _username = document.getElementById('username').value;
      const _password = document.getElementById('password').value;
        if(!_username){
            alert("Username is not Entered.");
        }
        else if(!_password){
            alert("Password is not Entered.");
        }
        else{
            setUserName("");
            setPassword("");
        }
        fetch(`${baseUrl}/auth/signin`, {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.status === 'ok'){
            window.localStorage.setItem('token', data.data);
            window.localStorage.setItem('loggedIn', true);
            window.location.href="./Dashboard";
          }
        });
        
    }
    return ( 
        <div className="h-screen">
            <div>
                <div className="flex justify-center text-white text-4xl py-20 hover:underline">
                    <h1 className="">Admin Login</h1>
                </div>
                <div className="flex flex-col mx-10 md:mx-96">
                    <input type="text" id="username" placeholder="Username" onChange={(e)=> setUserName(e.target.value)} className="w-full my-5 h-10 rounded-3xl text-center" required />
                    <input type="password" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} className="w-full my-5 h-10 rounded-3xl text-center" required />
                    <button onClick={loginHandler} className="bg-red-600 h-10 w-full rounded-3xl text-white hover:bg-red-700 ">
                        Login
                    </button>
                </div>
            </div>
        </div>
     );
}

export default Admin;