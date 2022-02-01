import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 



const Login = () => {
    const push = useNavigate(); 

    const [cred, setCred] = useState({
        username: "", 
        password: ""

    }); 

    const handleChange = (e) => {
        setCred({
            ...cred, 
            [e.target.name]:e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post("", cred)
            .then(resp => {
                console.log(resp); 
                localStorage.setItem("token",); 
                push('/client')
            })
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <div className="App">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange} name="username" id="username" />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} name="password" type="password" id="password" />
            </div>

            <button>Login</button>
            </form>

        </div>
    )
}

export default Login; 