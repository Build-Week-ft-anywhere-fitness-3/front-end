import React from 'react';
import ClassList from './ClassList';
import styled from 'styled-components';

const InstructorHome = () => {
    const username = localStorage.getItem("username")

    return (
        <ComponentContainer className="instructor-home">  
            <ModalContainer>
                <h1>Hi, {username}!</h1>
                <h2>Class Lists</h2>
                <ClassList />
            </ModalContainer>          
        </ComponentContainer>
    )
}

export default InstructorHome;

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
    border-radius: 5px; 
`