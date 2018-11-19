import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './App.css'
import Header from './Header'
import About from './About'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      
        <div className='App'>
          <Route exact path='/' render={props => <Header extra={<div className='hero-image'>{Header}</div>} />} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
