import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/Group 3.png";
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

export const Login = () => {
    
    const navigate = useNavigate();
    const [datas,setDatas] = useState([]);
    const [error,setError] = useState(false);//eslint-disable
    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch(`${process.env.REACT_APP_HOST}/users`);
            const data = await response.json();
            setDatas(data)

        }
        fetchUsers();
      
    }, []) //eslint disable

    function handleLogin(e) {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
     
    const user = datas.find(item => item.email === email);

    if (user && user.password === password) {
        toast.success("Logged in Successfully")
        navigate("/dashboard");
        setError(false); // Reset error state
    } 
   
    if(user&&user.password !== password ) {
        setError(true);
        
        toast.error('Password incorrect!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

     if(!user)
     {
        toast.error('User Not Found', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",})
     }
      

       
        
    }

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="w-full max-w-sm p-4 rounded-lg shadow sm:p-6 md:p-8">
                <form className="space-y-12" onSubmit={handleLogin}>
                    <div className="flex justify-center items-center">
                        <img src={Logo} alt="logo" />
                    </div>
                    <p className='flex justify-center items-center text-xl sm:text-2xl text-green-700'>We are Electric</p>
                    <div>
                        <input type="email" name="email" id="email" className="my-12 bg-zinc-800   text-white text-sm rounded-3xl block w-full p-2.5" placeholder="Email" style={{"boxShadow": "inset 0px 3px 3px rgba(255, 253, 253, 0.25), 3px 3px 3px rgba(74, 73, 73, 0.47)"}} required />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="my-12 bg-zinc-800   text-white text-sm rounded-3xl block w-full p-2.5" style={{"boxShadow": "inset 0px 3px 3px rgba(255, 253, 253, 0.25), 3px 3px 3px rgba(74, 73, 73, 0.47)"}} required />
                    </div>
                    <div className="bg-gradient-to-br rounded-3xl from-green-500 via-black to-green-900 border-2 border-green-500 opacity-100">
  <button type="submit" className="w-full text-white rounded-3xl  font-medium text-2xl px-5 py-2.5 text-center " style={{"background": "linear-gradient(180deg, rgba(0, 255, 37, 0.5) 0%, #000000 100%, rgba(54, 165, 70, 0.5) 100%) 0% 0% no-repeat padding-box"}}>Login</button>
</div>

                    
<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
    <Link to="/forgot_password" className="flex justify-center items-center ms-auto text-sm text-green-700 hover:underline" >Forgot Password?</Link>
</div>

                </form>
            </div>
        </div>
    )
}
