import React from 'react';
import "/home/shashank/Programs/React/login/src/components/Form/form.css"
import hv1 from "./hv1.png"
import { Input } from "baseui/input";
import {Textarea} from "baseui/textarea"
import {FormControl} from "baseui/form-control"
import {Select} from "baseui/select"
import {Button,KIND,SHAPE} from 'baseui/button'
function Form(){
    return(  <div className="par">
        <div className="head"><h1>Add New Task</h1>
        <hr/>

        </div>
    <div className="one">
         <div className="two"><img src={hv1} alt=""/></div >
        <span style={{color:"rgb(84,182,250)"}}><b> Upload tracks</b></span>

    </div>

    <div className="forms">

      <div><span id="font"> <p>Add Track Manually</p></span></div>  
      <div>
        <FormControl
          label={() => "Name of the Topic"}>
          <Input overrides={{
        InputContainer: {
            style: {
                width : "30vw",height : '4vh'
            }
        }
    }
}  ></Input>
        </FormControl>          
          </div>
      <div>
      <FormControl
          label={() => "Add Description"}>
           <Textarea 
      placeholder="Enter the Topic Name"
      overrides={{
        Input: {
          style: {
            maxHeight: '300px',
            minHeight: '70px',
            minWidth: '300px',
            width: '30vw', 
            height : '9vh',// fill all available space up to parent max-width
            resize: 'both',
          },
        
        },
        InputContainer: {
          style: {
            maxWidth: '100%',
            width: 'min-content',
          },
        },
      }}/>
       </FormControl>
       </div>

       <div>
           <FormControl label={() => "Map Topics"}>
           <Select
      creatable
      multi
      options={[
        {id: 'Portland', label: 'Portland'},
        {id: 'NYC', label: 'New York City'},
        {id: 'LosAngeles', label: 'Los Angeles'},
        {id: 'Boston', label: 'Boston'},
        {id: 'Atlanta', label: 'Atlanta'},
        {id: 'SanFrancisco', label: 'San Francisco'},
      ]}
      labelKey="label"
      valueKey="id"
      overrides= {{
        Root : {
          style : {width : "30vw"}

        }
      }}
   
   />
           </FormControl>
       </div>

<div>
    <FormControl 
    label={() => "Map Topics"}>
<Select
      creatable
      multi
      options={[
        {id: 'Portland', label: 'Portland'},
        {id: 'NYC', label: 'New York City'},
        {id: 'LosAngeles', label: 'Los Angeles'},
        {id: 'Boston', label: 'Boston'},
        {id: 'Atlanta', label: 'Atlanta'},
        {id: 'SanFrancisco', label: 'San Francisco'},
      ]}
      labelKey="label"
      valueKey="id"  overrides= {{
        Root : {
          style : {width : "30vw"}

        }
      }} /></FormControl>
</div>
<div className="button">
<div> <Button kind={KIND.secondary}>Select</Button></div>

<div><Button kind={KIND.secondary}>Cancel</Button></div>
</div>
 </div>
    </div>
     )
}
export default Form 