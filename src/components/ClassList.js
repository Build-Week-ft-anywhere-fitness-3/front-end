import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const ClassList = () => {
    const [ state, setState ] = useState([])
    useEffect(()=> {
        axios.get(`https://bw-anywherefitness-3.herokuapp.com/api/classes`)
        .then(res=> {
            setState(res.data)
        })
        .catch(err=> {
            console.log(err)
        })
    },[])
    return (
        <div className="class-list">
            {
                state.map(s => {
                    return (<ComponentContainer>
                        <ModalContainer>                        
                            <Details>
                                <h2>{s.class_name}</h2>
                                <h3>Date: {s.date} {s.time}</h3>
                                <h3>Duration: {s.duration}</h3>
                                <h3>Level: {s.intensity_level}</h3>
                                <h3>Attendees: {s.attendees} people (Max: {s.max_size} people)</h3>
                            </Details>                        
                        </ModalContainer>
                    </ComponentContainer>
                    )
                })
            }
        </div>
    )
}

export default ClassList;
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
const Details = styled.div`


`