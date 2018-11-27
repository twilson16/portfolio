import React, { Component } from 'react'
import './App.css'

class Project extends Component {
  constructor () {
    super()
    this.state = {
      project: []
    }
  }

  render (idx) {
    let { project } = this.props
    console.log(project.examples.media)
    let images = project.examples.map((image, idx) => {
      return <img key={idx} src={`${project.examples[idx]}`} alt='media examples' />
    })

    return (
      <div className='single-project'>
        <div className='project-title'>{project.title}</div>
        <div className='project-desc'>{project.description}</div>
        <div className='project-tech'>Technologies: {project.tech}</div>
        {/* <div className='project-examples'>{project.examples[idx].map((example, idx) => (
          <div key={idx} className='whole-example'>
            <div>
              <img className='media' src={project.examples} alt='Project Example' />
            </div>
          </div>))}
        </div> */}
        <div> { images } </div>

        <div>
          <p className='project-github'><a href={project.github} target='blank'>Code on Github</a></p>
          {project.live.length > 0 &&
          <p className='live-site-container'>
            <span className='space'>&nbsp;|&nbsp;</span>
            <span className='project-live'><a href={project.live} target='blank'>Live Site</a></span>
          </p>}
          {project.presentation !== '' &&
          <p className='presentation-container'>
            <span className='space'>&nbsp;|&nbsp;</span>
            <span className='presentation'><a href={project.presentation} target='blank'>Final Group Presentation</a>
            </span>
          </p>
          }
        </div>
      </div>

    )
  }
}

export default Project
