import React, { Component } from "react";
import { Container, Alert } from "reactstrap";
class NotFoundPage extends Component {
	render() {
		return (
			<Container>
				<Alert color="danger" className="mt-5">
					<h3 className="text-center">404 - NOT FOUND</h3>
				</Alert>
			</Container>
		);
	}
}

export default NotFoundPage;
