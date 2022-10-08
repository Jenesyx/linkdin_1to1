import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css' 

function Sidebar() {

  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
          <img src='https://cdn.discordapp.com/attachments/930134181911085056/1027193536052998204/1500x500.jpg' alt=''/>
          <Avatar className='sidebar__avatar'/>
          <h2>Ali Bidkhori</h2>
          <h4>Alibid@gmail.com</h4>
      </div>
        
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>
            3,900
          </p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>
            3,542
          </p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('valorant')}
        {recentItem('UI | UX')}
        {recentItem('Logo desing')}
        {recentItem('Motion graphic')}
      </div>
    </div>
  )
}

export default Sidebar