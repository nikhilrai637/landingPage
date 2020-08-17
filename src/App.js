import React from 'react';
import './App.css';
import Home from './Home/Home'
import {Route,Switch} from 'react-router-dom'
 
import Domains from './Home/Domains/Domains';

function App() {
  return (
    <div>    
      
      <Route path = "/home" component = {Home}/>
      <Route path = "/Get_Start" component = {Domains}/>   
     
      </div>
    
  );
}

export default App;
