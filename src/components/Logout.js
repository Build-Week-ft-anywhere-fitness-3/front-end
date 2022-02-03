import React, { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 

const Logout = () => {
    const push = useNavigate(); 
    
    useEffect(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("username")
        push('/login');           
    }, []); 
    return (<div></div>)
}

export default Logout; 

