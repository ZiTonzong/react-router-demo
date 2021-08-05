import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

export default function BasicExample() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/dashboard">NotFound</Link>
					</li>
				</ul>
			</div>

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/dashboard">
					<NotFound />
				</Route>
			</Switch>
		</Router>
	)
}
