import React from 'react';
import ClassList from './ClassList';
import styled from 'styled-components';


const InstructorHome = (props) => {
    
    return (
        <ComponentContainer className="instructor-home">  
            <ModalContainer>
                <h1>Hi, {props.username}</h1>
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
`