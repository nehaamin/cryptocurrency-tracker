import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import Application from './components/Application';

class App extends Component {
	render() {
		return (
			<div>
				<section className="hero is-info">
					{/* <div className="hero-body is-size-2 has-text-centered">LeapYear Fullstack Challenge</div> */}
				</section>
				<section className="section">
					<div className="container">
						<Application />
						{/* <h3 className="is-size-5 has-text-weight-bold">You will be building a Cryptocurrency tracker!</h3> */}
						<br />
						{/* <div>Please review the README for instructions.</div> */}
					</div>
				</section>
				{/* End of instructions */}
			</div>
		)
	}
}

export default App
