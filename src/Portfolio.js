import React, { Component } from 'react'
import './App.css'
import Project from './Project'
import QRscan from './Media/qr-scan.png'
import SquareGame from './Media/square-game.png'

class Portfolio extends Component {
  constructor () {
    super()
    this.state = {
      projects: [
        {
          'title': 'Traction App',
          'description': "An app created as our final project for Momentum Learning's immersive program to track the distribution of Naloxone kits. The user is able to either scan a QR code on the Naloxone kit or manually input the kit number, which are then passed to a form that securely documents the personal information per state regulations.",
          'tech': 'Ruby on Rails, React, Devise gem, QR code scanner, Heroku',
          'examples': QRscan,
          'presentation': 'https://www.youtube.com/watch?v=OtG0iYPGEdI',
          'github': 'https://github.com/twilson16/HarmReductionTracker',
          'live': 'https://harm-reduction-tracker.herokuapp.com/'
        },
        {
          'title': 'Square Game',
          'description': 'A Javascript game we created at the end of Week 3 in immersive program with Momentum Learning.',
          'tech': 'Ruby on Rails, React, Devise gem, QR code scanner, Heroku',
          'examples': SquareGame,
          'presentation': '',
          'github': 'https://github.com/twilson16/square-game',
          'live': ''
        }
      ]
    }
  }

  render () {
    return (
      <div className='portfolio-container'>
        <div className='portfolio-title'><h1>Portfolio</h1></div>
        <div className='project-container'>
          {this.state.projects.map((project, idx) =>
            <Project key={idx} project={project} />)}
        </div>
      </div>
    )
  }
}

export default Portfolio
