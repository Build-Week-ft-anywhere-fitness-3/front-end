import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/Login"; 
import Logout from "./components/Logout"; 
import NavBar from "./components/NavBar"; 
import SignUp from "./components/SignUp";
import CreateClass from "./components/CreateClass";


function App() {
  return (
   <BrowserRouter>
   <NavBar />
   <Routes>
    <Route exact path="/" element={<Login />}/>
    <Route exact path="login" element={<Login />}/>
    <Route exact path="signup" element={<SignUp />}/>
    
    <Route path="createClass" element={<CreateClass />}/>
    
    <Route path="logout" element={<Logout />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
