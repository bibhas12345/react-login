import React from 'react';
// import './SidebarDashboard.css';

import { BsFillTagsFill } from 'react-icons/fa';

const Cards = (props) => {
  return (
    <div className="card">
        <h3 className="dash">{props.text}</h3>
        <h2>{props.number}</h2>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}


function SidebarDashboard() {
  return (
    <div className="sidebar-dashboard">
      <div className="card">
        <h2 >Board.</h2>
        <ul>
        <li>Dashboard</li>
        
          <li>Schedule</li>
          
          <li> Transaction</li>
          
          <li>User</li>
          
          <li>Settings</li>
        </ul>
      </div>
      
      <div>
        <ul className='help'> Help</ul>
       <ul className='about'> About us</ul>
        </div>
        
    </div>
  );
}

export default SidebarDashboard;
export {Cards};