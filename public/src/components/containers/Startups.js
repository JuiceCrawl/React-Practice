import React, { Component } from 'react'
import superagent from 'superagent'
import APIClient from '../../utils/APIClient'
import store from '../../stores/store'
import actions from '../../actions/actions'
import { connect } from 'react-redux'

class Startups extends Component {

  constructor(props, context){
    super(props, context)
    this.state = {
      title: 'Not Startups'
    }
    
  }

  componentDidMount(){

    APIClient.get('/api/startup', null, (err, response)=>{

      const startups = response.startups
      store.currentStore().dispatch(actions.startupsReceived(startups))

     

      //console.log('componentDidMount:', JSON.stringify(response))
    })

  }

  componentWillMount(){



  } 

  render(){

    var startupList = this.props.startups.map((startup, i) => {
      return (
        <li key={i}>{startup.name}</li>
      )
    })

    return (
      <div>
        {this.state.title}
        
        <ol>
          {startupList}
        </ol>
        
      
      </div>

    )
  }
}

const stateToProps = function(state){
  return {
    startups: state.startupReducer.startups
  }

}

export default connect(stateToProps)(Startups)

//npm install superagent --save makes api requests, not needd in angular


