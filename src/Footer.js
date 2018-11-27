import React, { Component } from 'react'
import './App.css'

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <div>
          <p className='footer-name'>© Tina Wilson 2018</p>
          <div className='contact' />
        </div>
        <div><hr className='footer-break' /></div>
        <div className='update'>Check back later for more updates!</div>
      </div>
    )
  }
}

export default Footer
