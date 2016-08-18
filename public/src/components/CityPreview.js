import React, { Component } from 'react'

class CityPreview extends Component {
	render(){
		const city = this.props.city
		return (
			<div style={{marginTop: 12, background: '#f9f9f9', border: '1px solid #ddd', padding: 16}}>
				<h2 style={{marginTop:0}}>{city.name}</h2>
				<hr />
				<span>Pop: {city.population} million</span><br />
				<span>Time Zone: {city.timezone}</span><br />
			</div>
		)
	}
}

export default CityPreview

//style inline actually makes things modular but you cna have individual style sheets
//server side rendering is better and faster (see in source code), if rendering clinet side you wont see in view source
//if react is running server side on node then they only comiling you need to worry about is jsx, not es6