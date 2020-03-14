import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Form from './components/Form/form'
import Login from './components/Login/Login'
function App(){ return(
  <Router>
    <div>
    {/* <Route path="/" exact component={Login}/> */}
        <Route path="/form" component={Form}/>
        <Route path="/" exact component={Login}/>
  </div>  
  </Router>)
};

export default App
