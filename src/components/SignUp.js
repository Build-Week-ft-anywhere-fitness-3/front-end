import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [ state, setState ] = useState({                
        username:'',
        password:'',
        isInstructor: false              
    })
    const [ error, setError ] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(``, state)
            .then(res => {
                console.log(res.data)
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
    
    const handleInstructor = () => {
        setState({
            ...state,
            isInstructor: !state.isInstructor
        })
    }
    return (
        <div className="sign-up">
            <h1>Sign Up!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input
                    name="username"
                    type="text"
                    onChange={handleChange}
                    value={state.credentials.username}
                    />
                </label>
                <label>
                    Password
                    <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={state.credentials.password}
                    />
                </label>
                <lebel>
                    Sign up as Instructor?
                    <select>
                        <option onClick={handleInstructor}>Yes</option>                        
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