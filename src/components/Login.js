import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import img1 from "./../images/fitness3.jpg"; 
import {Email, PhoneEnabled, Home } from "@material-ui/icons";
import "./Login.css";


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
        axios.post("https://anywhere-fitness-buildweek.herokuapp.com/api/clients/login", cred)
            .then(resp => {
                console.log(resp); 
                localStorage.setItem("token",resp.data.token); 
                push('/client')
            })
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <>
     <div className="image">  
        <img src={img1} width="1200" height="350" alt="fit chick"/>
       </div>
       <div className="title">
        <h1>Welcome To AnyWhere Fitness! <br/> Login below to schedule a class!</h1>
      </div> 
    
    <div className="ComponentContainer">  
    
    <div className="login">   
    <div className="ModalContainer">
        <div className="LoginDiv">
            <h1 className="login">Login</h1>
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
    </div>
    
    </div>
</div>
<div className="contact">
    <div className="itemContainer">
        <Email className="icon"/>
        <h3>Email: 1234@email.com</h3>
    </div>

    <div className="itemContainer">
        <PhoneEnabled className="icon"/>
        <h3>Phone: 123-456-7890</h3>
    </div>

    <div className="itemContainer">
        <Home className="icon"/>
        <h3>Address: 1234 SomeWhere Road #1004 Austin, TX 78744 USA</h3>
    </div>
</div>
</>
    )
}
export default Login;