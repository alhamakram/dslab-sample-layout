import logo from './logo.svg';
import './App.css';
import Login from './login/login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './login/register';
import Records from './records/records';
import { useState,useEffect } from 'react';

import Navbar
 from './Navbar';
import Record from './records/record';
import New from './new';
import Home from './components/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('auth')) || false
  );

  const setAuth = (value) => {
    setIsAuthenticated(value);
    //alert(value);
  };

  useEffect(()=>{
    localStorage.setItem("auth", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);
  return (

    <>
    <Navbar/>
    <Routes>
    
    <Route exact path = "/" element=<Login /> />
         
          
          <Route exact path="/register" element=<Register/> />
          <Route exact path="/records" element=<Records/> />
          <Route exact path="/home" element=<Home/> />
          <Route exact path="/new" element=<New/> />
          
         
    </Routes>
   </>
   

    
  );
}

export default App;
