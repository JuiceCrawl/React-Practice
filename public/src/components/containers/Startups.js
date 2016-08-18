import React, { Component } from 'react'
import superagent from 'superagent'
import APIClient from '../../utils/APIClient'

class Startups extends Component {

  constructor(props, context){
    super(props, context)
    this.state = {
      startups: [],
      title: 'Not Startups'
    }
  }

  componentDidMount(){

    APIClient.get('/api/startup', null, (err, response)=>{

      const startups = response.startups

      this.setState({
        startups: startups,
        title: 'Startups!!'
      })

      //console.log('componentDidMount:', JSON.stringify(response))
    })

  }

  componentWillMount(){



  } 

  render(){

    const startupNames = this.state.startups.map((startup, i) =>{
          return <li key={i}>{startup.name}</li>
        })

    return (
      <div>
        {this.state.title}
        
        <ol>
            {startupNames}
        </ol>
        
      
      </div>

    )
  }
}

export default Startups

//npm install superagent --save makes api requests, not needd in angular


