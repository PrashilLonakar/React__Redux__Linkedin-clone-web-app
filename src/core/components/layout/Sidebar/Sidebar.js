import React from 'react'
import "./Sidebar.css"
import { Avatar } from "@material-ui/core"; 

function Sidebar() {

  const recentItem = (topic) => {
    return (
      <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
    )
  }

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://scontent-pnq1-2.xx.fbcdn.net/v/t31.18172-8/11154781_677409455724411_6428075706765868199_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Cdh93qHA9NAAX-Cm5CJ&_nc_ht=scontent-pnq1-2.xx&oh=00_AT-bo_mWGp3e6JQLwuFfSWAK9ujX0EFDTP9vENKqT45x0A&oe=627192E0' alt=''/>
            <Avatar className='sidebar__avatar' />
            <h2>Prashil Lonakar</h2>
            <h4>prashil.lonakar@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,543</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2,448</p>
          </div>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('reactjs')}
          {recentItem('programming')}
          {recentItem('Sodftwareengineering')}
          {recentItem('design')}
          {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar