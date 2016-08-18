import React, { Component } from 'react'
import CityPreview from '../CityPreview'
import superagent from 'superagent'

class Cities extends Component {

	constructor(props, context){ //nomally this would be props and inherited but using state for simplicity
		super(props, context)
		this.state = {
				cities: []

		}
	}

	componentDidMount(){


		superagent
		.get('/api/startup')
		.query(null)
		.set('Accept', 'text/json')
		.end((err, response) => {
			console.log(JSON.stringify(response.body))
		})

		// API result: would realistically get this after the compnt mounts
		const cities = [
				{name: 'new york', timezone: 'EST', population: 10},
				{name: 'chicago', timezone: 'CST', population: 6},
				{name: 'denver', timezone: 'MST', population: 3},

			]

			this.setState({ //like angular digest to re render
				cities: cities
			})

	}//life cycle method, will get called right after the componet shows up invoked byt the system 

	componentWillMount(){

	} //life cycle method, will get called right BEFORE the componet shows up, invoked byt the system 


	render(){
		// console.log('RENDER') // you'll see this twice since you call this.SetState()
		const citiesList = this.state.cities.map((city, i) =>{
			// return <li key={i}>{city.name}, {city.population} mil</li> //sub-components
			return <CityPreview key={i} city={city}/> //pass off prop from one container to the dumb component
		})

		return (
			<div>
				This is the cities Component
			
					{citiesList}
		
			</div>

		)
	}
}

export default Cities

//npm install superagent --save makes api requests, not needd in angular


