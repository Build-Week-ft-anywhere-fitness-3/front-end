import React, { useState } from 'react';

import "./CreateClass.css";

import axiosWithAuth from './../utils/axiosWithAuth';

const initialState = {
    class_name: "",        
    class_type: "",
    class_start_time: "",
    class_duration: "",
    class_intensity_level: "",
    class_location: "",
    total_clients: 0,
    max_class_size: 0,    
    instructor_id: 0    
}
const CreateClass = () => {

    const [ state, setState ] = useState(initialState)
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
        if (time.ampm === 'pm'){
            hour = parseInt(time.hour) + 12
        } else {
            hour = time.hour
        }
        if(hour < 10){
            hour = `0${hour}`
        }

        let finalTime = `${hour}:${time.minute}`
        let gotId = localStorage.getItem('id')

        setState({
            ...state,
            class_start_time: finalTime,
            instructor_id: gotId
        })
        
        axiosWithAuth().post(`/instructors/create`, state)
        .then(res => {
            console.log(res)
            // setState(initialState)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (<div className="ComponentContainer">
    <div className="ModalContainer">
        <div className="create-class form">
            <form onSubmit={handleSubmit}>
                <h1>Create A Class</h1>
                <label>
                    Class Name
                    <input
                    name="class_name"
                    type="text"
                    value={state.class_name}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Class Type
                    <select name="class_type" value={state.class_type} onChange={handleChange}>
                        <option value="none" selected>Class type</option>
                        <option value="flex">Flexibility exercise</option>
                        <option value="aero">Aerobic exercise</option>
                        <option value="anaero">Anaerobic exercise</option>
                        <option value="other">other</option>
                    </select>
                </label>
                <label>
                    Start Time
                    <select className="selectName" name="ampm" value={time.ampm} onChange={timeConvert}>                        
                        <option value="am">AM</option>
                        <option value="pm">PM</option>                        
                    </select>
                    <select className="selectName" name="hour" value={time.hour} onChange={timeConvert}>                        
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
                    </select>
                    :
                    <select className="selectName" name="minute" value={time.minute} onChange={timeConvert}>                        
                        <option value="00">00</option>
                        <option value="30">30</option>                        
                    </select>
                </label>
                <label>
                    Duration
                    <input
                    name="class_duration"
                    type="number"
                    value={state.class_duration}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Level
                    <select name="class_intensity_level" value={state.class_intensity_level} onChange={handleChange}>
                        <option value="none" selected>Select Level</option>
                        <option value="1">1 Beginner</option>
                        <option value="2">2 Intermediate</option>
                        <option value="3">3 Advanced</option>
                        <option value="4">4 Athlete</option>
                        <option value="5">5 Even harder</option>
                    </select>
                </label>
                <label>
                    Location
                    <select name="class_location" value={state.class_location} onChange={handleChange}>
                        <option value="none" selected>Select Location</option>
                        <option value="upperEast">Upper East</option>
                        <option value="upperWest">Upper West</option>
                        <option value="midtown">Midtown</option>
                        <option value="downtown">Downtown</option>
                        <option value="other">other</option>
                    </select>
                </label>
                <label>
                    Current attendees
                    <input
                    name="total_clients"
                    type="number"
                    value={state.total_clients}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Max Attendees
                    <input
                    name="max_class_size"
                    type="number"
                    value={state.max_class_size}
                    onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    </div>    
</div>)
}
export default CreateClass;
