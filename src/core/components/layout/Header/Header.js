import React from 'react'
import './Header.css';
import HeaderOption from './HeaderOption/HeaderOption';

import linekinIcon from '../../../../aspects/svg/linkedinLogo.svg';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src={ linekinIcon } alt="" />
            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon}  title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon}  title="Jobs"/>
            <HeaderOption Icon={ChatIcon}  title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon}  title="Notifications"/>
            <HeaderOption avatar="https://lh3.googleusercontent.com/ogw/ADea4I6oGTzQDshRQhVQyFxskKkOdsos_hFky3H1xJttXg=s32-c-mo" title="me"/>
        </div>
    </div>
  )
}

export default Header