import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'

import './App.css'
import HomeHeader from './HomeHeader'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <HomeHeader />
        <div>Portfolio Coming Soon!</div>
      </div>
    )
  }
}

export default App
