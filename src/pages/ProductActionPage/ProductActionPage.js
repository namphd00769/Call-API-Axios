import React, { Component } from "react";
import {
	Container,
	Col,
	Row,
	Button,
	Form,
	FormGroup,
	Label,
	Input
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	actAddProductRequest,
	actGetProductByIdRequest,
	actUpdateProductRequest
} from "../../actions/index";
// import PropTypes from "prop-types";

class ProductActionPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			name: "",
			price: 0,
			status: false
		};
	}

	componentDidMount() {
		const { match } = this.props;
		if (match) {
			let id = match.params.id;
			this.props.onGetProductBy(id);
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps && nextProps.itemUpdating) {
			this.setState({
				id: nextProps.itemUpdating.id,
				name: nextProps.itemUpdating.name,
				price: nextProps.itemUpdating.price,
				status: nextProps.itemUpdating.status
			});
		}
	}

	onChange = event => {
		let target = event.target;
		let name = target.name;
		let value = target.type === "checkbox" ? target.checked : target.value;

		this.setState({
			[name]: value
		});
	};
	onSave = event => {
		const { id, name, price, status } = this.state;
		event.preventDefault();
		const { history } = this.props;
		let product = {
			id: id,
			name: name,
			price: price,
			status: status
		};
		if (id) {
			//update
			this.props.onDeleteProduct(product);
			history.goBack();
		} else {
			//add
			this.props.onAddProduct(product);
			history.goBack();
		}
	};
	render() {
		const { name, price, status } = this.state;
		return (
			<Container>
				<h3 className="text-center mt-5">Thêm sản phẩm</h3>
				<Form className="mt-5" onSubmit={this.onSave}>
					<Row form>
						<Col md={6}>
							<FormGroup>
								<Label for="name">Name</Label>
								<Input
									type="text"
									name="name"
									id="name"
									placeholder="Enter name product"
									onChange={this.onChange}
									value={name}
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label for="number">Price</Label>
								<Input
									type="number"
									name="price"
									id="number"
									placeholder="Enter price product"
									onChange={this.onChange}
									value={price}
								/>
							</FormGroup>
						</Col>
					</Row>
					<FormGroup check>
						<Input
							type="checkbox"
							name="status"
							id="exampleCheck"
							checked={status}
							onChange={this.onChange}
							value={status}
						/>
						<Label for="exampleCheck">Còn Hàng</Label>
					</FormGroup>
					<Link to="/product-list" className="btn btn-danger mr-3">
						Trở Lại
					</Link>
					<Button outline color="primary">
						Tạo
					</Button>
				</Form>
			</Container>
		);
	}
}

// ProductActionPage.propTypes = {
// 	itemUpdating: PropTypes.shape({
// 		id: PropTypes.number,
// 		name: PropTypes.string.isRequired,
// 		price: PropTypes.number.isRequired,
// 		status: PropTypes.bool
// 	})
// };

const mapStateToProps = state => {
	return {
		itemUpdating: state.itemUpdating
	};
};
const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddProduct: product => {
			dispatch(actAddProductRequest(product));
		},
		onGetProductBy: id => {
			dispatch(actGetProductByIdRequest(id));
		},
		onDeleteProduct: product => {
			dispatch(actUpdateProductRequest(product));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductActionPage);
