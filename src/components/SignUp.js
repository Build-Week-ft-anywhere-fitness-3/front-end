import React, { useState } from 'react';
import axios from 'axios';
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
    
    return (
        <div className="sign-up">
            <h1>Sign Up!</h1>
            <form onSubmit={handleSubmit}>
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
                    Email
                    <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={state.email}
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
                <lebel>
                    Sign up as Instructor?
                    <select value={state.role} onChange={(e)=> handleInstructor(e)}>
                        <option value="" >Select</option>
                        <option name="instructor" value="instructor">Instructor</option>
                        <option name="client" value="client">Not Instructor</option>
                    </select>
                </lebel>
                <button>Sign Up</button>
            </form>
                {
                    error ? <p className="error">{error}</p> : <div></div>
                }
        </div>
    )
}
export default SignUp;