import React, { useState } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';
import FoundClass from './FoundClass';
import "./FindClass.css";

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

    return (<div className="ComponentContainer">
        <div className="ModalContainer">
        <div className="find-class">
            <div className="search-bar">
                <h1>Find a Class</h1>
                <p>input your preference.</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        Class Type
                        <select name="class_type" value={state.class_type} onChange={handleChange}>
                            <option value="none" selected>select Class Type</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Kickboxing">Kick boxing</option>
                            <option value="HIIT">HIIT</option>
                            <option value="other">other</option>
                        </select>
                    </label>
                    <label>
                        Start Time
                        <select className="SelectTime" name="ampm" value={time.ampm} onChange={timeConvert}>                        
                            <option value="am">AM</option>
                            <option value="pm">PM</option>                        
                        </select>
                        <select className="SelectTime" name="hour" value={time.hour} onChange={timeConvert}>                        
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
                        <select className="SelectTime" name="minute" value={time.minute} onChange={timeConvert}>                        
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
                    <select name="class_intensity_level" value={state.level} onChange={handleChange}>
                        <option value="none" selected>select Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="other">other</option>
                    </select>
                </label>
                <label>
                    Location
                    <select name="class_location" value={state.location} onChange={handleChange}>
                        <option value="none" selected>select Location</option>
                        <option value="upperEast">Upper East</option>
                        <option value="upperWest">Upper West</option>
                        <option value="midtown">Midtown</option>
                        <option value="downtown">Downtown</option>
                        <option value="other">other</option>
                    </select>
                </label>
                <button>Submit</button>
                </form>
            {
                foundClass ? <FoundClass foundClass={foundClass} searchedClass={state}/> : (<div></div>)            
            }
            </div>
        </div>
    </div>    
</div>)
}
export default FindClass;