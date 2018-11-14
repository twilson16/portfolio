import React, { Component } from 'react'
import './App.css'

class Nav extends Component {
  render () {
    return (
      <div className='nav-bar'>
        <div className='menu-bar'>
          <ul className='menu'>
            <li className='menu-item'><a href='#'><button className='menu-button'>Home</button></a></li>
            <li className='menu-item'><a href='#'><button className='menu-button'>Portfolio</button></a></li>
            <li className='menu-item resume'><a href='/Media/ChristinaWilsonResume2018.pdf' target='blank'><button className='menu-button'>Resume</button></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
