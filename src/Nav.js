import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css'
import Resume from './Media/ChristinaWilsonResume2018.pdf'

class Nav extends Component {
  render () {
    return (
      <div className='nav-bar'>
        <div className='menu-bar'>
          <ul className='menu'>
            <li className='menu-item'><a href='/'><button className='menu-button'>Portfolio</button></a></li>
            <li className='menu-item'><a href='/about'><button className='menu-button'>About Me</button></a></li>
            <li className='menu-item resume'><a href='localhost:3000/Media/ChristinaWilsonResume2018.pdf' target='blank'><button className='menu-button'>Resume</button></a></li>
            {/* <li className='menu-item resume'><a href='https://twilson16.github.io/portfolio/Media/ChristinaWilsonResume2018.pdf' target='blank'><button className='menu-button'>Resume</button></a></li> */}
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav
