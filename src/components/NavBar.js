import { getSuggestedQuery } from '@testing-library/dom';
import React from 'react'; 
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';

const NavBar = () => {

    const StyledLink = styled(Link)`
        color: white; 
        text-decoration: none; 
        cursor: pointer; 
        font-weight: bold; 
        opacity: 1;
        &:hover {
            background-color: lightblue; 
        }
    `;


    return (
        <div style={{
            display: "flex", 
            flexDirection: "row", 
            height: "5em", 
            margin: "1em", 
            backgroundColor: "#274c77",
            justifyContent: "space-around", 
            alignItems: "center", 
            textColor: "white",
        }}>
        <StyledLink to="login">Login</StyledLink>
        <StyledLink to="instructorLogin">Instructor Login</StyledLink>
        <StyledLink to="signup">Sign Up</StyledLink>
        <StyledLink to="client">Find a class</StyledLink>
        <StyledLink to="createclass">Create Class</StyledLink>
        <StyledLink to="instructor">Instructor</StyledLink>
        <StyledLink to="logout">Logout</StyledLink>
        </div>
    )
}

export default NavBar; 