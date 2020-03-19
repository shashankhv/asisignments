import React from 'react';
import 'antd/dist/antd.css'; 
import './Nav.css'
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined, UserOutlined ,ArrowDownOutlined , SettingOutlined , LeftSquareOutlined ,RightSquareOutlined ,EnvironmentTwoTone } from '@ant-design/icons';
import { Input , Button } from 'antd';
import { Radio } from 'antd';
const { Search } = Input;
const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <UserOutlined />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <UserOutlined />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <UserOutlined />
        3rd item
      </Menu.Item>
    </Menu>
  );
  
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  




function Antd(){
    return(<div className="nav">
    
      <div className="headnav">
      <span style={{width : '25%'}}> <b><span style={{fontSize : '21pt'}}>Locations</span></b><p>create, edit or deactivate meeting locations</p></span>

   
    <div className="rightnav">
    <Search className="buttonnav"
      placeholder="Search"
      style={{ width: 200 }}
    />
    <Button className="buttonnav" type="primary">New Location</Button>
</div>
    </div>
    <div className="butnav">
    <Dropdown overlay={menu}>
      <Button shape="round">
        Room Status <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu}>
      <Button shape="round">
        Engagement Types Mapped <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu}>
      <Button shape="round">
        Topics Mapped <DownOutlined />
      </Button>
    </Dropdown>
    <Dropdown overlay={menu}>
      <Button shape="round">
       Created by <DownOutlined />
      </Button>
    </Dropdown>
    
    </div>
    <div className="navnav" >
    <Radio size="middle" style={{marginLeft:'4%'}}/>
    <span style={{marginLeft : '1%'}} > <b>Name</b> <ArrowDownOutlined /></span>
      <span style={{marginLeft  : '20%'}}><b>Address</b></span>
      <span style={{marginLeft  : '20%'}}><b>Capacity</b></span>
      <span style={{marginLeft  : '20%'}}><b>Created by</b></span> 
      <Dropdown.Button style={{marginLeft : "10%"}} overlay={menu} icon={<ArrowDownOutlined />}>
      <SettingOutlined />
    </Dropdown.Button>
    </div>
 <div className="locnav">
  <EnvironmentTwoTone style={{fontSize : '100px'}} />
<span> <h3>No Location Added </h3></span>
  <Button className="buttonnav" type='primary'>New Location</Button>
</div>
<div className="footnav">
<div className="footernav" style={{width : '8.2%'}}>
    <Button className="buttonnav" >Back</Button>
    <Button className="buttonnav" type="primary" style={{marginLeft : '8%'}} >Next</Button>
</div>
<div className="hvnav">
    <p>Showing 0 locations</p>
<Dropdown.Button style={{marginLeft : "10%"}} overlay={menu} icon={<ArrowDownOutlined />}>
    </Dropdown.Button>
    <LeftSquareOutlined style={{fontSize : '32px'}}/><RightSquareOutlined style={{fontSize : '32px'}} />
    
</div>
</div>

    </div>)
}
export default Antd