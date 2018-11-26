import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
// import Nav from './Nav'

class HomeHeader extends Component {
  render () {
    const { isHome } = this.props
    const { isOther } = this.props
    return (
      <div className='header-container'>
        <div className='home-header'>
          <div className='hero-image'>
            <div className='header-name-home'>Tina Wilson</div>
            <div className='nav-bar'>
              <div className='menu-bar'>
                <ul className='menu'>
                  <li className='home-menu-item'><NavLink to='/' onClick={(e) => isHome(e)} className='home-menu-link'>Portfolio</NavLink></li>
                  <li className='home-menu-item'><NavLink to='/about' onClick={(e) => isOther(e)} className='home-menu-link'>About Me</NavLink></li>
                  <li className='home-menu-item resume'><a href='localhost:3000/Media/ChristinaWilsonResume2018.pdf' target='blank' className='home-menu-link'>Resume</a></li>
                  {/* <li className='menu-item resume'><a href='https://twilson16.github.io/portfolio/Media/ChristinaWilsonResume2018.pdf' target='blank'><button className='menu-button'>Resume</button></a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader
