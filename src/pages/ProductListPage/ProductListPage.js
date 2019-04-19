import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import {
	actFetchProductsRequest,
	actDeleteProductRequest
} from "../../actions/index";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
class ProductListPage extends Component {
	componentDidMount() {
		this.props.fetchAllProducts();
	}
	render() {
		const { products } = this.props;
		return (
			<Col>
				<Link to="/product/add" className="mt-20 mb-20  btn btn-info">
					Thêm sản phẩm
				</Link>
				<ProductList>{this.showProducts(products)}</ProductList>
			</Col>
		);
	}

	onDelete = id => {
		this.props.onDeleteProduct(id);
	};

	showProducts = products => {
		let result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (
					<ProductItem
						key={index}
						product={product}
						index={index}
						onDelete={this.onDelete}
					/>
				);
			});
		}
		return result;
	};
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchAllProducts: () => {
			dispatch(actFetchProductsRequest());
		},
		onDeleteProduct: id => {
			dispatch(actDeleteProductRequest(id));
		}
	};
};
const mapStateToProps = state => {
	return {
		products: state.products
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductListPage);
