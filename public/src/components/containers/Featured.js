import React, { Component } from 'react'
import { connect } from 'react-redux'

class Featured extends Component {

  render(){
    const featured =  this.props.startups.map((startup, i)=>{
      if(startup.featured === 'yes'){
        return <li key = {i}>{startup.name}</li>
      }

    })


    return (
      <div>
        <h2>Featured Startups</h2>
        <ol>{featured}</ol>
      </div>
    )
  }

}

const stateToProps = function(state){
  return {
    startups: state.startupReducer.startups
  }
}

export default connect(stateToProps)(Featured)