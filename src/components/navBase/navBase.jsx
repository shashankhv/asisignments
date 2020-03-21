import React from 'react';
import './navBase.css'
import { Button, SIZE } from "baseui/button";
import { Input } from "baseui/input";
import {useStyletron} from 'baseui';
import {Search} from 'baseui/icon';
import Menu from 'baseui/icon/menu'
import {StatefulSelect} from 'baseui/select';
import TriangleLeft from 'baseui/icon/triangle-left'
import TriangleRight from 'baseui/icon/triangle-right'
import {Checkbox} from 'baseui/checkbox';
import Show from 'baseui/icon/show'
function After() {
    const [css, theme] = useStyletron();
    return (
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          paddingRight: theme.sizing.scale500,
        })}
      >
        <Search size="18px" />
      </div>
    );
  }

function NavBase()
{
    return(<div style={{marginLeft : '4%' , marginRight : "4%" , marginTop: '2%',}}>
        <div className="headerBase">
            <div>
                <span style={{fontSize : '18pt'}}><b>Locations</b> </span>
                <span><p>Create, Edit or deactivate meeting Locations</p></span>
            </div>
            <div style={{width : '25%'}}>
        <span className="headerBaseRight" >
        <Input
      overrides={{After,  
        Input: {
        style: {
          maxHeight: '33px',
          minHeight: '15px',
          minWidth: '30px',
          width: '12vw', 
          height : '9vh',// fill all available space up to parent max-width
          resize: 'both',
        },
      
      },
      InputContainer: {
        style: {
          maxWidth: '100%',
          width: 'min-content',
          borderRadius : '5%'
        },
      }, }}
      placeholder="Search"
    />
    <Button  size={SIZE.compact}  overrides={{
         BaseButton : {
                    style: {
                      maxWidth: '100%',
                      width: '12vw',
                      backgroundColor: 'rgb(0,128,255)',
                      borderRadius : '5%'
                    },
                  }
 }} > New Location</Button>
        </span>

            </div>
        </div>
 <div className="navbasedrop">

 <StatefulSelect
 overrides={{
     Root :{
         style : {
            width: 'auto',
            
         }
     },
     ControlContainer : {
         style : 
         {
            borderRadius : '30px'
         }
        },
        
 }}
     
      size={SIZE.compact}
      placeholder="Room Status"
      options={[
        {id: 'AliceBlue', color: '#F0F8FF'},
        {id: 'AntiqueWhite', color: '#FAEBD7'},
        {id: 'Aqua', color: '#00FFFF'},
        {id: 'Aquamarine', color: '#7FFFD4'},
        {id: 'Azure', color: '#F0FFFF'},
        {id: 'Beige', color: '#F5F5DC'},
      ]}/>

<StatefulSelect
 overrides={{
    Root :{
        style : {
           width: 'auto'
        }
    },
    ControlContainer : {
        style : 
        {
           borderRadius : '30px'
        }
    }
}}
    
     placeholder="Engagement Types Mapped"
     size={SIZE.compact}
     options={[
       {id: 'AliceBlue', color: '#F0F8FF'},
       {id: 'AntiqueWhite', color: '#FAEBD7'},
       {id: 'Aqua', color: '#00FFFF'},
       {id: 'Aquamarine', color: '#7FFFD4'},
       {id: 'Azure', color: '#F0FFFF'},
       {id: 'Beige', color: '#F5F5DC'},
     ]}/>

<StatefulSelect
 overrides={{
    Root :{
        style : {
           width: 'auto'
        }
    },
    ControlContainer : {
        style : 
        {
           borderRadius : '30px'
        }
    }
}}
    
     placeholder="Topics Mapped"
     size={SIZE.compact}
     options={[
       {id: 'AliceBlue', color: '#F0F8FF'},
       {id: 'AntiqueWhite', color: '#FAEBD7'},
       {id: 'Aqua', color: '#00FFFF'},
       {id: 'Aquamarine', color: '#7FFFD4'},
       {id: 'Azure', color: '#F0FFFF'},
       {id: 'Beige', color: '#F5F5DC'},
     ]}/>
      <StatefulSelect
      overrides={{
        Root :{
            style : {
               width: 'auto'
            }
        },
        ControlContainer : {
            style : 
            {
               borderRadius : '30px'
            }
        }
    }}
    placeholder="Created by"
     size={SIZE.compact}
     options={[
       {id: 'AliceBlue', color: '#F0F8FF'},
       {id: 'AntiqueWhite', color: '#FAEBD7'},
       {id: 'Aqua', color: '#00FFFF'},
       {id: 'Aquamarine', color: '#7FFFD4'},
       {id: 'Azure', color: '#F0FFFF'},
       {id: 'Beige', color: '#F5F5DC'},

     ]}/>
 </div>

 <div className="greybar">
    <span style={{marginLeft : '4%'}}> <Checkbox/></span> 
      <span style={{marginLeft : "1%"}}><b>Name</b></span>
      <span style={{marginLeft : "18%"}}><b>Address</b></span>
      <span style={{marginLeft : "25%"}}><b>Capacity</b></span>
      <span style={{marginLeft : "26%"}}><b>Created by</b></span>
      
      
      <span style={{marginLeft : "4%"}} >
      <StatefulSelect
      placeholder=<Menu/>
 overrides={{
     Root :{
         style : {
            width: 'auto',
            
         }
     }
        
 }}
     
      size={SIZE.compact}
      
      options={[
        {id: 'AliceBlue', color: '#F0F8FF'},
        {id: 'AntiqueWhite', color: '#FAEBD7'},
        {id: 'Aqua', color: '#00FFFF'},
        {id: 'Aquamarine', color: '#7FFFD4'},
        {id: 'Azure', color: '#F0FFFF'},
        {id: 'Beige', color: '#F5F5DC'},
      ]}/>
      </span>

 </div>

<div className="middle">
      <span> <Show size={200}/> </span>
      <span><p>Locations Added</p></span>
      <span><Button
       size={SIZE.compact}
        overrides={{
          BaseButton : {
            style: {
              maxWidth: '100%',
              width: '10vw',
              backgroundColor: 'rgb(0,128,255)',
              borderRadius : '5px',
              height : 'auto'
            },
          }

      }}>New Locations</Button></span>
</div>
<div className="leftfooter">
<Button
    overrides={{
        BaseButton : {
            style : {
                backgroundColor : "white",
                borderStyle : 'solid',
                borderColor : 'red',
                color : 'rgb(0,128,255)',
                borderColor : 'rgb(0,128,255)',
                width : '8vw'
            }
        }
    }}
      onClick={() => alert("click")}
      size={SIZE.compact}
    >Back</Button>
   
   
    <Button
    overrides={{
        BaseButton : {
            style : {
                marginLeft : '7%',
                backgroundColor : "rgb(0 ,128,255)",
                width : '8vw'
                
            }
        }
    }}
      onClick={() => alert("click")}
      size={SIZE.compact}
    >Next</Button>
</div>
<div className="rightfooter">
<p>Showing 0 Locations</p>
<StatefulSelect
      placeholder=<Menu/>
 overrides={{
     Root :{
         style : {
            width: '3vw',
            
         }
     }
        
 }}
     
      size={SIZE.compact}
      
      options={[
        {id: 'AliceBlue', color: '#F0F8FF'},
        {id: 'AntiqueWhite', color: '#FAEBD7'},
        {id: 'Aqua', color: '#00FFFF'},
        {id: 'Aquamarine', color: '#7FFFD4'},
        {id: 'Azure', color: '#F0FFFF'},
        {id: 'Beige', color: '#F5F5DC'},
      ]}/>
      <Button size={SIZE.mini}><TriangleLeft/></Button>
      <Button size={SIZE.mini}><TriangleRight/></Button>
</div>

 </div>)
}
export default NavBase