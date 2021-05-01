import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const userData = JSON.parse(localStorage.getItem('user'));
    const u_name = userData.name
    const pwd = userData.password

    const [username,setUsername] = useState('') 
    const [password,setPassword] = useState('') 
 
    function onSubmitHandler(e) {
        e.preventDefault();
        if(u_name === '')
        {
            alert(`Enter a valid Username`)
            return
        }
        if(pwd === '')
        {
            alert(`Enter a vaild Password`)
            return
        }
        setUsername('')
        setPassword('')
        
    }
    

    return (
        <div>
            <div className="flex h-screen">
                <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   
                    <header>
                        <img className="w-20 mx-auto mb-5" src="https://icons-for-free.com/iconfiles/png/512/boy+man+person+user+woman+icon-1320085967769585303.png" alt="done" />
                    </header>   
                    <form onSubmit={onSubmitHandler}>
                        <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="username">Username</label>
                            <input 
                                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" 
                                type="text" 
                                name="username" 
                                autoComplete="off" 
                                value={username}
                                onChange={(event)=>setUsername(event.target.value)}
                            />
                        </div>
                        <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                            <input 
                                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" 
                                type="password" 
                                name="password" 
                                value={password}
                                onChange={(event)=>setPassword(event.target.value)}
                            />
                        </div>
                        <div>  
                            {u_name === username && pwd === password?<Link to="/datalist"><input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" /></Link> : <input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />}        
                        </div>       
                    </form>  
                    <footer>
                        <Link to="/register"><p className="text-indigo-700 hover:text-pink-700 text-sm float-right">Register</p></Link>
                    </footer>   
                </div>
            </div>
        </div>
    )
}
export default Login