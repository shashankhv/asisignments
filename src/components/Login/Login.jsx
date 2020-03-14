import React, { Component } from 'react';
import '../Login/Login.css'
import {Button,SHAPE} from "baseui/button"
import { SIZE } from 'baseui/input';
import { Input } from "baseui/input";
import {FormControl} from "baseui/form-control"
import hv from '../Login/hv.png';
class Login extends Component{
    render(){
    return(<div className="parent">
        
    <div className="r1">
        <img src={hv} alt=""/>
        
        <h1>Login</h1> <br/>
        <form>
        <FormControl
      label={() => "Name"} >
      <Input type="email"/>
    </FormControl>  
    <FormControl
      label={() => "Password"}
      caption={() => "forgot password?"}
    >
      <Input type="password"/>
    </FormControl>
        <Button className="but" size = {SIZE.mini} shape={SHAPE.pill} >Submit</Button>
        </form>
    
        <div className="footer"> <p>This is footer</p> </div>
        <div className="footer2"> <p>This is footer</p> </div>
        </div>
     <div className="r2">     
    
    </div>
   
    </div>
    )
}
}
export default Login