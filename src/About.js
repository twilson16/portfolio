import React, { Component } from 'react'
import './App.css'
import miseryRidge from './Media/cropped_misery_ridge_adj.jpg'

class About extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <div className='image-container'>
            <img className='about-image' src={miseryRidge} alt='Misery Ridge, OR' />
          </div>
          <div className='about-container'>
            <h1 className='about-title'>About Me</h1>
            <div className='about-info'>
              <p className='intro'>
             I am a person who likes to have a destination.
            Even simply going for a walk or a drive, I have an endpoint, a goal, and put a lot of thought into the most efficient way to get to get there.
            I apply that to my life in general as well, both in pursuing software development, and in my previous social work career.
            On a daily basis I set goals for myself, and work to reach them despite challenges arise by also valuing the unexpected detours that come with any challenges.
            This is especially true for work projects and assignments - where I strive for excellence.
              </p>
              <br />
              <p className='photo-description'>
            Above: a photo I took after completing the hike to the top of Misery Ridge in Oregon’s Smith Rock State Park.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
