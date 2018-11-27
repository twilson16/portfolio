import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

class Header extends Component {
  render () {
    const { isHome } = this.props
    const { isOther } = this.props
    return (
      <div className='header'>
        <div className='header-text-container'>
          <div className='header-name'>Tina Wilson</div>
          <div className='nav-bar'>
            <div className='menu-bar'>
              <ul className='menu'>
                <li className='menu-item'><NavLink to='/' onClick={(e) => isHome(e)} className='menu-link'>Portfolio</NavLink></li>
                <li className='menu-item'><NavLink to='/about' onClick={(e) => isOther(e)} className='menu-link'>About Me</NavLink></li>
                <li className='menu-item resume'><a href='localhost:3000/Media/ChristinaWilsonResume2018.pdf' target='blank' className='menu-link'>Resume</a></li>
                {/* <li className='menu-item resume'><a href='https://twilson16.github.io/portfolio/Media/ChristinaWilsonResume2018.pdf' target='blank'><button className='menu-button'>Resume</button></a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
