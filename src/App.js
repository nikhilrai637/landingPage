import React from 'react';
import './App.css';
import Home from './Home/Home'
import {Route,Switch} from 'react-router-dom'
import Page2 from './Home/Page2/Page2';

function App() {
  return (
    <div>    
      
      <Route path = "/home" component = {Home}/>
      <Route path = "/Get_Start" component = {Page2}/>   
     
      </div>
    
  );
}

export default App;
