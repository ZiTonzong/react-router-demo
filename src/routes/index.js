import React from 'react'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'

import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

const history = createBrowserHistory()
const Routes = () => {
	<Router history={history}>
		<Route path="home" component={Home}></Route>
		<Route path="about" component={About}></Route>
		<Route path="*" component={NotFound}></Route>
	</Router>
}

export default Routes
