import React, { useState } from 'react';
import styled from 'styled-components';

import "./CreateClass.css";

import axios from 'axios';


const CreateClass = () => {
    const [ state, setState ] = useState({
        class_name: "",        
        class_type: "",
        class_start_time: "09:00:00",
        class_duration: "",
        class_intensity_level: "",
        class_location: "",
        total_clients: 0,
        max_class_size: 0,        
    })

    const [ time, setTime ] = useState({
        ampm:'am',
        hour:'1',
        minute:'00',        
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const timeConvert = e => {
        setTime({
            ...time,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        let hour = 1
        if(time.ampm === 'pm'){
            hour = parseInt(time.hour) + 12
        } else {
            hour = time.hour
        }
        if(hour < 10){
            hour = `0${hour}`
        }
        let finalTime = `${hour}:${time.minute}:00`
        setState({
            ...state,
            class_start_time: finalTime
        })
        axios.post(``, state)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (<ComponentContainer>
    <ModalContainer>
        <div className="create-class form">
            <FormGroup onSubmit={handleSubmit}>
                <h1>Create A Class</h1>
                <Label>
                    Class Name
                    <Input
                    name="class_name"
                    type="text"
                    value={state.class_name}
                    onChange={handleChange}
                    />
                </Label>
                <Label>
                    Class Type
                    <Select name="class_type" value={state.class_type} onChange={handleChange}>
                        <option value="none" selected>Class type</option>
                        <option value="flex">Flexibility exercise</option>
                        <option value="aero">Aerobic exercise</option>
                        <option value="anaero">Anaerobic exercise</option>
                        <option value="other">other</option>
                    </Select>
                </Label>
                <Label>
                    Start Time
                    <SelectTime name="ampm" value={time.ampm} onChange={timeConvert}>                        
                        <option value="am">AM</option>
                        <option value="pm">PM</option>                        
                    </SelectTime>
                    <SelectTime name="hour" value={time.hour} onChange={timeConvert}>                        
                        <option value="1">1</option>
                        <option value="2">2</option>                        
                        <option value="3">3</option>                        
                        <option value="4">4</option>                        
                        <option value="5">5</option>                        
                        <option value="6">6</option>                        
                        <option value="7">7</option>                        
                        <option value="8">8</option>                        
                        <option value="9">9</option>                        
                        <option value="10">10</option>                        
                        <option value="11">11</option>                        
                        <option value="12">12</option>                        
                    </SelectTime>
                    :
                    <SelectTime name="minute" value={time.minute} onChange={timeConvert}>                        
                        <option value="00">00</option>
                        <option value="30">30</option>                        
                    </SelectTime>
                </Label>
                <Label>
                    Duration
                    <Input
                    name="class_duration"
                    type="number"
                    value={state.class_duration}
                    onChange={handleChange}
                    />
                </Label>
                <Label>
                    Level
                    <Select name="class_intensity_level" value={state.class_intensity_level} onChange={handleChange}>
                        <option value="none" selected>Select Level</option>
                        <option value="1">1 Beginner</option>
                        <option value="2">2 Intermediate</option>
                        <option value="3">3 Advanced</option>
                        <option value="4">4 Athlete</option>
                        <option value="5">5 Even harder</option>
                    </Select>
                </Label>
                <Label>
                    Location
                    <Select name="class_location" value={state.class_location} onChange={handleChange}>
                        <option value="none" selected>Select Location</option>
                        <option value="upperEast">Upper East</option>
                        <option value="upperWest">Upper West</option>
                        <option value="midtown">Midtown</option>
                        <option value="downtown">Downtown</option>
                        <option value="other">other</option>
                    </Select>
                </Label>
                <Label>
                    Current attendees
                    <Input
                    name="total_clients"
                    type="number"
                    value={state.total_clients}
                    onChange={handleChange}
                    />
                </Label>
                <Label>
                    Max Attendees
                    <Input
                    name="max_class_size"
                    type="number"
                    value={state.max_class_size}
                    onChange={handleChange}
                    />
                </Label>
                <Button>Submit</Button>
            </FormGroup>
        </div>
    </ModalContainer>    
</ComponentContainer>)
}
export default CreateClass;

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

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
    margin-top: 0.5em;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`
const Select = styled.select`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const SelectTime = styled.select`
    font-size: 1rem;
    padding: 1rem 0;
    width:10%;
    margin: 0 0.5em;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
    margin-top: 1em;
`