import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
// import Nav from './Nav'

class Header extends Component {
  render () {
    const home = this.state.home
    const { isHome } = this.props
    const { isOther } = this.props
    return (
      <div className='header-container'>
        { home ? (
          <div className='home-header'>
            <div className='hero-image'>
              <div className='header-name-home'>Tina Wilson</div>
              <div className='nav-bar'>
                <div className='menu-bar'>
                  <ul className='menu'>
                    <li className='menu-item'><NavLink to='/' onClick={(e) => isHome(e)} className='menu-button'>Portfolio</NavLink></li>
                    <li className='menu-item'><NavLink to='/about' onClick={(e) => isOther(e)}>About Me</NavLink></li>
                    <li className='menu-item resume'><a href='localhost:3000/Media/ChristinaWilsonResume2018.pdf' target='blank'><button className='menu-button'>Resume</button></a></li>
                    {/* <li className='menu-item resume'><a href='https://twilson16.github.io/portfolio/Media/ChristinaWilsonResume2018.pdf' target='blank'><button className='menu-button'>Resume</button></a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
          : (
            <div className='about-header'>
              <div className='header-name'>Tina Wilson</div>
              <div className='nav-bar'>
                <div className='menu-bar'>
                  <ul className='menu'>
                    <li className='menu-item'><NavLink to='/' onClick={(e) => isHome(e)}>Portfolio</NavLink></li>
                    <li className='menu-item'><NavLink to='/about'
                      onClick={(e) => isOther(e)}>About Me
                    </NavLink></li>
                    <li className='menu-item resume'><a href='localhost:3000/Media/ChristinaWilsonResume2018.pdf' target='blank'><button className='menu-button'>Resume</button></a></li>
                    {/* <li className='menu-item resume'><a href='https://twilson16.github.io/portfolio/Media/ChristinaWilsonResume2018.pdf' target='blank'><button className='menu-button'>Resume</button></a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Header
