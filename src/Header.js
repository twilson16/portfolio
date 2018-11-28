import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div className='header-text-container'>
          <div className='header-name'>Tina Wilson</div>
          <div className='nav-bar'>
            <div className='menu-bar'>
              <ul className='menu'>
                <li className='menu-item'><NavLink to='/portfolio' className='menu-link'>Portfolio</NavLink></li>
                <li className='menu-item'><NavLink to='/about' className='menu-link'>About Me</NavLink></li>
                <li className='menu-item resume'><NavLink to='/resume' className='menu-link'>Resume</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
