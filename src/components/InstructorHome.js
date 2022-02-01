import React from 'react';
import ClassList from './ClassList';

const InstructorHome = (props) => {
    
    return (
        <div className="instructor-home">            
            <h1>Hi, {props.username}</h1>
            <h2>Class Lists</h2>
            <ClassList />
        </div>
    )
}
export default InstructorHome;