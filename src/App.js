import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './App.css'
// import Header from './Header'
import HomeHeader from './HomeHeader'
import AboutHeader from './AboutHeader'
import About from './About'
import Portfolio from './Portfolio'
// import Resume from './Resume'

class App extends Component {
  constructor () {
    super()
    this.state = {
      home: true
    }
    this.handleChangeToHome = this.handleChangeToHome.bind(this)
    this.handleChangeToOther = this.handleChangeToOther.bind(this)
  }

  handleChangeToHome (e) {
    console.log(this.state.home, 'change to home')
    this.setState(state => (
      {home: true}))
  }

  handleChangeToOther (e) {
    console.log(this.state.home, 'change to other')
    this.setState(state => (
      {home: false}))
  }

  render () {
    return (
      <div className='App'>
        {this.state.home ? (
          <div> <HomeHeader setHome={this.state.home} isHome={this.handleChangeToHome} isOther={this.handleChangeToOther} /></div>
        )
          : (<div> <AboutHeader setHome={this.state.home} isHome={this.handleChangeToHome} isOther={this.handleChangeToOther} /></div>)
        }
        <div className='board'>
          <Route exact path='/' render={() => (<Portfolio />)} />
          <Route path='/about' render={() => (<About />)} />
        </div>
      </div>
    )
  }
}

export default App
