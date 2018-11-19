import React, { Component } from 'react'
import './App.css'
// import Nav from './Nav'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      home: true
    }
  }

  render () {
    const isHome = this.state.home
    return (
      <div className='header-container'>
        {isHome ? (
          <div className='hero-image'>
            <div className='header-name-home'>Tina Wilson</div>
            {/* <Nav handleChangeToHome={this.handleChangeToHome} handleChangeToOther={this.handleChangeToOther} /> */}
            <div className='nav-bar'>
              <div className='menu-bar'>
                <ul className='menu'>
                  <li className='menu-item'><button className='menu-button' onClick={this.state.handleChangeToOther}><a href='/'>Portfolio</a></button></li>
                  <li className='menu-item'><button className='menu-button' onClick={this.state.handleChangeToOther}><a href='/about'>About Me</a></button></li>
                  <li className='menu-item resume'><a href='localhost:3000/Media/ChristinaWilsonResume2018.pdf' target='blank'><button className='menu-button'>Resume</button></a></li>
                  {/* <li className='menu-item resume'><a href='https://twilson16.github.io/portfolio/Media/ChristinaWilsonResume2018.pdf' target='blank'><button className='menu-button'>Resume</button></a></li> */}
                </ul>
              </div>
            </div>
          </div>
        )
          : (
            <div>
              <div className='header-name'>Tina Wilson</div>
              {/* <Nav handleChangeToHome={this.handleChangeToHome} handleChangeToOther={this.handleChangeToOther} /> */}
              <div className='nav-bar'>
                <div className='menu-bar'>
                  <ul className='menu'>
                    <li className='menu-item'><a href='/'><button className='menu-button' onClick={this.state.handleChangeToOther}>Portfolio</button></a></li>
                    <li className='menu-item'><a href='/about'><button className='menu-button' onClick={this.state.handleChangeToOther}>About Me</button></a></li>
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
