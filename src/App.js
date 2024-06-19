import React, { Component } from 'react'
import { Routes , Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Weather from './Components/Weather'

export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Routes>
          <Route></Route>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/weather' element={<Weather></Weather>}></Route>
        </Routes>
      </div>
    )
  }
}

export default App