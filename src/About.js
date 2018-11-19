import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import miseryRidge from './Media/cropped_misery_ridge_adj.jpg'

class About extends Component {
  render () {
    return (
      <div>
        <Header />
        <div>
          <div>
            <img className='about-image' src={miseryRidge} alt='Misery Ridge, OR' />
          </div>
          <div className='about-container'>
            <h1 className='about-title'>About Me</h1>
            <p className='about-info'>
            I am a person who likes to have a destination.
            Even simply going for a walk or a drive, I have an endpoint, a goal, and put a lot of thought into the most efficient way to get to get there.
            I apply that to my life in general as well, both in pursuing software development, and in my previous social work career.
            On a daily basis I set goals for myself, and work to reach them no matter what challenges arise.
            This is especially true for work projects and assignments - where I strive for excellence in my work.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
