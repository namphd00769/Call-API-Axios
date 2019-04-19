import React, { Component } from "react";
import "./Menu.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import { Route, Link } from "react-router-dom";
const links = [
	{
		name: "Trang Chủ",
		to: "/",
		exact: true
	},
	{
		name: "Quản Lý Sản Phẩm ",
		to: "/product-list",
		exact: true
	}
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
		<Route
			path={to}
			exact={activeOnlyWhenExact}
			children={({ match }) => {
				let active = match ? "active_link" : "";
				return (
					<li className={`nav-item ${active}`}>
						<Link to={to} className="nav-link">
							{label}
						</Link>
					</li>
				);
			}}
		/>
	);
};
class Menu extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Call Api</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						{/* <NavItem>
							<NavLink href="/components/">Components</NavLink>
						</NavItem> */}
						{this.showMenus(links)}
					</Nav>
				</Collapse>
			</Navbar>
		);
	}

	showMenus = links => {
		let result = null;
		result = links.map((link, index) => {
			return (
				<MenuLink
					key={index}
					label={link.name}
					to={link.to}
					activeOnlyWhenExact={link.exact}
				/>
			);
		});
		return result;
	};
}

export default Menu;
