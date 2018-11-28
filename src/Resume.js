import React, { Component } from 'react'
import './App.css'
import pdf from './Media/ChristinaWilsonResume2018.png'

class Resume extends Component {
  render () {
    return (
      <div>
        <img src={pdf} alt='resume' className='resume-img' />
      </div>
    )
  }
}

export default Resume
