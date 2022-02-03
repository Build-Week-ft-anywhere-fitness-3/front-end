import React, { useState } from 'react';
import axios from 'axios';
import "./SignUp.css";

const SignUp = () => {
    const [ state, setState ] = useState({
        "username": "",
        "password": "",
        // role: ""
    })
    const [ message, setMessage ] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`https://anywhere-fitness-buildweek.herokuapp.com/api/clients/register`, state)
            .then(res => {
                setMessage(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        setState({
            username: "",
            password: "",
        })
    }
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    // const handleInstructor = e => {
    //     setState({
    //         ...state,
    //         role: e.target.value
    //     })
    // }

    return (<div className="ComponentContainer">
    <div className="ModalContainer">
        <div className="sign-up">
            <h1>Sign Up!</h1>
            <form className="Form" onSubmit={handleSubmit}>
                <label>
                    User Name
                    <input
                    name="username"
                    type="text"
                    onChange={handleChange}
                    value={state.username}
                    />
                </label>
                <label>
                    Password
                    <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={state.password}
                    />
                </label>
                {/* <label>
                    Sign up as Instructor?
                    <select value={state.role} onChange={(e)=> handleInstructor(e)}>
                        <option value="" >Select</option>
                        <option name="instructor" value="instructor">Instructor</option>
                        <option name="client" value="client">Not Instructor</option>
                    </select>
                </label> */}
                <button>Sign Up</button>
                {
                    message.message ? (<div><h2>{message.message}</h2></div>) : <div></div>
                }
            </form>                
        </div>
    </div>
</div>
    )
}
export default SignUp;
