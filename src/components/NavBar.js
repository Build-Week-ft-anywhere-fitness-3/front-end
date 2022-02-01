import React from 'react'; 
import { Link } from 'react-router-dom'; 

const NavBar = () => {
    return (
        <div style={{
            display: "flex", 
            flexDirection: "row", 
            height: "5em", 
            margin: "1em", 
            backgroundColor: "#0001", 
            justifyContent: "space-around", 
            alignItems: "center", 
        }}>
        <Link to="login">Login</Link>
        <Link to="signup">Sign Up</Link>
        <Link to="client">Find a class</Link>
        <Link to="createclass">Create Class</Link>
        <Link to="instructor">Instructor</Link>
        <Link to="logout">Logout</Link>
        </div>
    )
}

export default NavBar; 