import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import styled from 'styled-components';



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

    return (<ComponentContainer>            
    <ModalContainer>
        <div className="App">
            <h1>Login</h1>
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

        </div>
    </ModalContainer>
</ComponentContainer>
    )
}

export default Login; 
const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
    margin-top: 0.5em;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`
const Select = styled.select`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const SelectTime = styled.select`
    font-size: 1rem;
    padding: 1rem 0;
    width:10%;
    margin: 0 0.5em;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
    margin-top: 1em;
`