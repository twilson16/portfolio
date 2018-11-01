import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Nav from './Nav'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Nav />
        <div>Portfolio Coming Soon!</div>
      </div>
    )
  }
}

export default App
