import React, { useState } from 'react';
import styled from 'styled-components';
import axiosWithAuth from './../utils/axiosWithAuth';
import FoundClass from './FoundClass';

const FindClass = () => {
    const [ state, setState ] = useState({        
        class_type: "",
        class_start_time: "09:00:00",
        class_duration: "",
        class_intensity_level: "",
        class_location: "",
    })

    const [ time, setTime ] = useState({
        ampm:'am',
        hour:'1',
        minute:'00',        
    })

    const timeConvert = e => {
        setTime({
            ...time,
            [e.target.name]: e.target.value
        })
    }

    const [ foundClass, setClass ] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
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
        
        let token = localStorage.getItem('token')
        axiosWithAuth().get(`/clients/classes/`,{
            headers: {
                authorization: token
            }
        })
        .then(res=> {
            console.log(res)
            handleSearch(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    const handleSearch = found => {
        setClass(found)
    }

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (<ComponentContainer>
        <ModalContainer>
        <div className="find-class">
            <div className="search-bar">
                <h1>Find a Class</h1>
                <p>Input your preference.</p>
                <FormGroup onSubmit={handleSubmit}>
                    <Label>
                        Class Type
                        <Select name="class_type" value={state.class_type} onChange={handleChange}>
                            <option value="none" selected>Select Class Type</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Kickboxing">Kick boxing</option>
                            <option value="HIIT">HIIT</option>
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
                    <Select name="class_intensity_level" value={state.level} onChange={handleChange}>
                        <option value="none" selected>Select Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="other">other</option>
                    </Select>
                </Label>
                <Label>
                    Location
                    <Select name="class_location" value={state.location} onChange={handleChange}>
                        <option value="none" selected>Select Location</option>
                        <option value="upperEast">Upper East</option>
                        <option value="upperWest">Upper West</option>
                        <option value="midtown">Midtown</option>
                        <option value="downtown">Downtown</option>
                        <option value="other">other</option>
                    </Select>
                </Label>
                <Button>Submit</Button>
                </FormGroup>
            {
                foundClass ? <FoundClass foundClass={foundClass} searchedClass={state}/> : (<div></div>)            
            }
            </div>
        </div>
    </ModalContainer>    
</ComponentContainer>)
}
export default FindClass; 

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