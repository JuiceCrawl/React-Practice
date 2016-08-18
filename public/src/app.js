import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Startups from './components/containers/Startups'

class App extends Component {
  render(){
    return (
      <div>
        This is the React App
        <Startups />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))