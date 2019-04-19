import React, { Component } from "react";
import "./App.css";
import { Container, Row } from "reactstrap";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Menu />
					<Container>
						<Row>{this.showContentMenus(routes)}</Row>
					</Container>
				</div>
			</Router>
		);
	}
	showContentMenus = routes => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.content}
					/>
				);
			});
		}

		return <Switch>{result}</Switch>;
	};
}

export default App;
