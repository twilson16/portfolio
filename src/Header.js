import React, { Component } from 'react'
import './App.css'
import Nav from './Nav'

class Header extends Component {
  render () {
    return (
      <div className='header-container'>
        {/* <div className='hero-image'>
          <div className='hero-text'>
            <h1>Tina Wilson</h1>
            <p>Front-End Developer | Wanderer</p>
          </div>
        </div>
        <Nav /> */}

        <div className='header-name'>Tina Wilson</div>
        <Nav />
      </div>
    )
  }
}

export default Header
