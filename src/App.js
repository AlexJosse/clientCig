import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard.js";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
import { Album } from "./components/Home/Album.js";
import { HeaderComponent } from "./components/Home/Header.js";
import { PrivateRoute } from "./components/PrivateRoute.js";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-content">
					<Switch>
						<Route exact path="/" component={Login}/>
						<Route exact path ="/signup" component={Signup}/>
						<Route exact path ="/album" component={Album}/>
						<Route exact path ="/header" component={HeaderComponent}/>
						<PrivateRoute path='/dashboard' component={Dashboard} />
					</Switch>
				</div>
			</div>
		);
	}
}
export default App;