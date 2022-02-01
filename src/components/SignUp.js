import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SignUp = () => {
    const [ state, setState ] = useState({
        username: "",
        password: "",
        email: "",
        role: ""
    })
    const [ error, setError ] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        axios.post(``, state)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                // setError(err.response.data)
            })
    }
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleInstructor = e => {
        setState({
            ...state,
            role: e.target.value
        })
    }

    return (<ComponentContainer>
    <ModalContainer>
        <div className="sign-up">
            <h1>Sign Up!</h1>
            <FormGroup onSubmit={handleSubmit}>
                <Label>
                    User Name
                    <Input
                    name="username"
                    type="text"
                    onChange={handleChange}
                    value={state.username}
                    />
                </Label>
                <Label>
                    Email
                    <Input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={state.email}
                    />
                </Label>
                <Label>
                    Password
                    <Input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={state.password}
                    />
                </Label>
                <Label>
                    Sign up as Instructor?
                    <Select value={state.role} onChange={(e)=> handleInstructor(e)}>
                        <option value="" >Select</option>
                        <option name="instructor" value="instructor">Instructor</option>
                        <option name="client" value="client">Not Instructor</option>
                    </Select>
                </Label>
                <Button>Sign Up</Button>
            </FormGroup>
                {
                    error ? <p className="error">{error}</p> : <div></div>
                }
        </div>
    </ModalContainer>
</ComponentContainer>
    )
}
export default SignUp;

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

const Button = styled.button`
    padding:1rem;
    width: 100%;
    margin-top: 1em;
    `