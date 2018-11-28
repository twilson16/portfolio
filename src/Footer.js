import React, { Component } from 'react'
import './App.css'

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <div className='social'>
          <p className='footer-name'>© Tina Wilson 2018</p>
          <div className='contact'>
            <a href='mailto:christinawilson6@gmail.com' target='blank' className='icon'><i class='fas fa-envelope' /></a>
            <a href='https://www.linkedin.com/in/tina-wilson16/' target='blank' className='icon'><i class='fab fa-linkedin-in' /></a>
            <a href='https://github.com/twilson16' target='blank' className='icon'><i class='fab fa-github' /></a>
          </div>
        </div>
        <div><hr className='footer-break' /></div>
        <div className='update'>Check back later for more updates!</div>
      </div>
    )
  }
}

export default Footer
