import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';


function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png'/>

        <div className='header__search'>
          <SearchIcon/>
          <input type='text'/>
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Meesaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notification'/>
        <HeaderOption avatar='https://media.discordapp.net/attachments/930134181911085056/1021021511806623744/SomeOntheWay_a_man_named_itsxdevil_fullbody_ultra_detailed_dark_81d0fad7-6137-41a0-a878-56ca4679e7ca.png?width=600&height=600' title="me"/>
      </div>
    </div>
  )
}

export default Header  