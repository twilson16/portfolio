import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import Footer from './Footer'
import Resume from './Resume'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <div className='board'>
          <Route exact path='/' render={() => (<Portfolio />)} />
          <Route path='/about' render={() => (<About />)} />
          <Route path='/resume' render={() => (<Resume />)} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
