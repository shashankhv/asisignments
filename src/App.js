import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Form from './components/Form/form'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import NavBase from "./components/navBase/navBase"


// #endregion 
function App(){ return(
  <Router>
    <div>
    {/* <Route path="/" exact component={Login}/> */}

        <Route path="/form" component={Form}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/" exact component={Home}/>
        <Route path="/nav" exact component={Nav}/>
        <Route path='/navbase' exact component={NavBase}/>
  </div>  
  </Router>)
};

export default App
