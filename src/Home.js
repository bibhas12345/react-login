import React from 'react'
import logo from './logo.svg';
import css from './App.css';
import SidebarDashboard, { Cards } from './Components/SidebarDashboard';
import ActivitiesCard from "./Components/Activities.js";
import TopProductsCard from "./Components/TopProductCard.js";
// import dashboardData from './dashboardData.json';
// import React, { useState, useEffect } from 'react';
import Apicalls from './Components/Apicalls';

function Home() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className=' p-2 w-full'>
      Home
      <button className='bg-red-400 p-2 rounded-md' onClick={logout}>Log out</button>

      <div>
        <SidebarDashboard />
      </div>
      <div class="wrapper flex">
        <div>
          <Cards text="Dashboard" />
        </div>
        <div class="dashboard-card bg-red-500" >
          <h2>Total Revenues</h2>
          <ul>
            <li>$2,129,430</li>
          </ul>
        </div>
        <div class="dashboard-card1">
          <h2>Total Transactions</h2>
          <ul>
            <li>1,520</li>
          </ul>
        </div>
        <div class="dashboard-card2">
          <h2>Total Likes</h2>
          <ul>
            <li>9,721</li>
          </ul>
        </div>
        <div class="dashboard-card3">
          <h2>Total users</h2>
          <ul>
            <li>892</li>
          </ul>
        </div>
      </div>
      <div class="dashboard-card4">
        <Apicalls />
      </div>
      <div>
        <ActivitiesCard />
      </div>
      <div class="wrap">
        <div>
          <TopProductsCard />
        </div>
        <div className="schedule-card">
          <h2>Today's Schedule     </h2>
          <ul>
            <li>8:00am - 9:00am: Yoga</li>
            <li>10:00am - 11:00am: Meeting with Client A</li>
            <li>1:00pm - 2:00pm: Lunch with Team</li>
            <li>3:00pm - 4:00pm: Meeting with Client B</li>
            <li>5:00pm - 6:00pm: Gym</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
