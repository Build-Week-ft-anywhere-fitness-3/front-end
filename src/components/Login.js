import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import styled from 'styled-components';
import img1 from "./../images/fitness3.jpg"; 
import {Email, PhoneEnabled, Home } from "@material-ui/icons";
import "./Login.css";


const Login = () => {

    const LoginDiv = styled.div`
        background-color: 274c77; 
        color: white;
        `


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
        <>
     <div className="image">  
        <img src={img1} width="1200" height="350" alt="fit chick"/>
       </div>
       <div className="title">
        <h1>Welcome To AnyWhere Fitness! <br/> Login below to schedule a class!</h1>
      </div> 
    
    <ComponentContainer>  
    
    <div className="login">   
    <ModalContainer>
        <LoginDiv className="App">
            <h1 className="h1">Login</h1>
            <FormGroup onSubmit={handleSubmit}>
            <div>
                <Label htmlFor="username">Username:</Label>
                <Input onChange={handleChange} name="username" id="username" />
            </div>

            <div>
                <Label htmlFor="password">Password:</Label>
                <Input onChange={handleChange} name="password" type="password" id="password" />
            </div>

            <Button>Login</Button>
            </FormGroup>
           
        </LoginDiv>
        
    </ModalContainer>
    
    </div>
</ComponentContainer>
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
const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
    border-style: none; 
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
    background-color: #274c77;
    border-radius: 5px; 
    border-style: none; 
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
    margin-top: 0.5em;
    color: white;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
    border: 1px solid #2b5381; 
    background-color: #1d3557;
    
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
    margin-top: 1em;
    border: 1px solid #2b5381; 
    background-color: #1d3557;
    color: white;
`