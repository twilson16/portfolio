import React, { Component } from 'react'
import './App.css'
import Nav from './Nav'

class HomeHeader extends Component {
  render () {
    return (
      <div>
        <div className='hero-image'>
          <div className='hero-text'>
            <h1>Tina Wilson</h1>
            <p>Front-End Developer | Wanderer</p>
          </div>
        </div>
        <Nav />
      </div>
    )
  }
}

export default HomeHeader
