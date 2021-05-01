import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Register extends Component {

    userData;

    constructor(props){
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state ={
            name:'',
            email:'',
            password:"",
        }
    }

    onChangeName(e){
        this.setState({name:e.target.value})
    }

    onChangeEmail(e){
        this.setState({email:e.target.value})
    }

    onChangePassword(e){
        this.setState({password:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
    }

    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'));

        if(localStorage.getItem('user')){
            this.setState({
                name:this.userData.name,
                email:this.userData.email,
                password:this.userData.password
            })
        }
        else{
            this.setState({
                name:'',
                email:'',
                password:''
            })
        }
    }

    componentWillUpdate(_nextProps,nextState){
        localStorage.setItem('user',JSON.stringify(nextState));
    }

    render() {
        return (
            <div>
                <div className="flex h-screen">
                    <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   
                        <header>
                            <img className="w-20 mx-auto mb-5" src="https://icons-for-free.com/iconfiles/png/512/boy+man+person+user+woman+icon-1320085967769585303.png" alt="done" />
                        </header>   
                        <form onSubmit={this.onSubmit}>
                            <div>
                            <label className="block mb-2 text-indigo-500" htmlFor="username">Username</label>
                                <input 
                                    className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                    type="text" 
                                    name="username" 
                                    autoComplete="off"
                                    value = {this.state.name}
                                    onChange={this.onChangeName}
                                />
                            </div>
                            <div>
                            <label className="block mb-2 text-indigo-500" htmlFor="email">Email</label>
                                <input 
                                    className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" 
                                    type="email" 
                                    name="email" 
                                    autoComplete="off" 
                                    value = {this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                            </div>
                            <div>
                            <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                                <input 
                                    className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                                    type="password" 
                                    name="password" 
                                    value = {this.state.password}
                                    onChange={this.onChangePassword}
                                />
                            </div>
                            <div>          
                                <button type="submit" className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded">Register</button>
                            </div>       
                        </form>  
                        <footer>
                            <Link to="/"><p className="text-indigo-700 hover:text-pink-700 text-sm float-right">Login</p></Link>
                        </footer>   
                    </div>
                </div>
            </div>
        )
    }
}

