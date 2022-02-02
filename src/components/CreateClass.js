import React, { useState } from 'react';
import styled from 'styled-components';
import "./CreateClass.css";

const CreateClass = () => {
    const [ state, setState ] = useState({
        className:'',
        classType:'',
        ampm:'',
        hour:'',
        minute:'',
        duration: '',
        level: '',
        location: '',
        currAttendees: 0,
        maxAttendees:0
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (<ComponentContainer>
    <ModalContainer>
        <div className="create-class form">
            <FormGroup onSubmit={handleSubmit}>
                <h1>Create A Class</h1>
                <Label>
                    Class Name
                    <Input
                    name="className"
                    type="text"
                    value={state.className}
                    onChange={handleChange}
                    />
                </Label>
                <Label>
                    Class Type
                    <Select name="classType" value={state.classType} onChange={handleChange}>
                        <option value="none" selected>Class type</option>
                        <option value="flex">Flexibility exercise</option>
                        <option value="aero">Aerobic exercise</option>
                        <option value="anaero">Anaerobic exercise</option>
                        <option value="other">other</option>
                    </Select>
                </Label>
                <Label>
                    Start Time
                    <SelectTime name="ampm" value={state.ampm} onChange={handleChange}>                        
                        <option value="am">AM</option>
                        <option value="pm">PM</option>                        
                    </SelectTime>
                    <SelectTime name="hour" value={state.hour} onChange={handleChange}>                        
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
                    <SelectTime name="minute" value={state.minute} onChange={handleChange}>                        
                        <option value="00">00</option>
                        <option value="30">30</option>                        
                    </SelectTime>
                </Label>
                <Label>
                    Duration
                    <Input
                    name="duration"
                    type="number"
                    value={state.duration}
                    onChange={handleChange}
                    />
                </Label>
                <Label>
                    Level
                    <Select name="level" value={state.level} onChange={handleChange}>
                        <option value="none" selected>Select Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="other">other</option>
                    </Select>
                </Label>
                <Label>
                    Location
                    <Select name="location" value={state.location} onChange={handleChange}>
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
                    name="attendees"
                    type="number"
                    value={state.attendees}
                    onChange={handleChange}
                    />
                </Label>
                <Label>
                    Max Attendees
                    <Input
                    name="maxAttendees"
                    type="number"
                    value={state.maxAttendees}
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