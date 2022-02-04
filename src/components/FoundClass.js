import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FoundClass = (props) => {
    const { foundClass, searchedClass } = props;
    const [ state, setState ] = useState([])

    const handleSort = () =>{
        let found = []
        for (let i = 0; foundClass.length > i; i++){
            if(searchedClass.class_type === foundClass[i].class_type){
                found.push(foundClass[i])
            } else if (searchedClass.class_start_time === foundClass[i].class_start_time){
                found.push(foundClass[i])                
            } else if (searchedClass.class_duration === foundClass[i].class_duration){
                found.push(foundClass[i])                 
            } else if (searchedClass.class_intensity_level === foundClass[i].class_intensity_level){
                found.push(foundClass[i])
            } else if (searchedClass.class_location === foundClass[i].class_location){
                found.push(foundClass[i])
            }
            setState(found)
        }
    }

    useEffect(()=>{
        handleSort()
    },[foundClass])

    return (
        <div className="found-class">
            {
                state.map(s => {
                    return (<ComponentContainer>
                        <ModalContainer>                        
                            <div>
                                <h2>{s.class_name}</h2>
                                <h4>Type: {s.class_type}</h4>
                                <h4>Time: {s.class_start_time}</h4>
                                <h4>Duration: {s.class_duration}</h4>
                                <h4>Level: {s.class_intensity_level}</h4>
                                <h4>Attendees: {s.total_clients} people (Max: {s.max_class_size} people)</h4>
                            </div>                        
                        </ModalContainer>
                    </ComponentContainer>
                    )
                })
            }
        </div>
    )
}
export default FoundClass;

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