import React from 'react';
import { Button, SHAPE } from "baseui/button";
import './home.css'
import {Link} from 'react-router-dom'
function Home()
{
    return(<div style={{ display : "flex" ,  flexDirection:"column", justifyContent : 'center', alignItems : "center" , height : "100vh"}}>
        <h1 style={{color : "steelblue"}}> Go TO!</h1>
        <div className="button">
            <div > <Link to ="/form"> <Button shape={SHAPE.pill}>Page 1</Button></Link> </div>
            <div> <Link to ="/login"> <Button shape={SHAPE.pill}>Page 2</Button></Link> </div>
            <div><Link to ="/nav"> <Button shape={SHAPE.pill}>Page 3</Button></Link> </div>
            <div><Link to ="/navbase"> <Button shape={SHAPE.pill}>Page 4</Button></Link> </div>
        </div>
       </div>)
}
export default Home