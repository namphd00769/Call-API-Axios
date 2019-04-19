import React, { Component } from "react";
import classNames from "classnames";
import { Button, Badge } from "reactstrap";
import { Link } from "react-router-dom";
class ProductItem extends Component {
	render() {
		const { product, index } = this.props;
		return (
			<tr>
				<th scope="row">{index + 1}</th>
				<td>{product.id}</td>
				<td>{product.name}</td>
				<td>{product.price}</td>
				<td>
					<Badge
						className={classNames("badge", {
							"badge-success": product.status,
							"badge-warning": !product.status
						})}
					>
						{product.status ? "Còn Hàng" : "Hết Hàng"}
					</Badge>
				</td>
				<td>
					<Link
						to={`product/${product.id}/edit`}
						className="btn btn-success mr-3"
					>
						Sửa
					</Link>
					<Button color="danger" onClick={() => this.onDelete(product.id)}>
						Xóa
					</Button>{" "}
				</td>
			</tr>
		);
	}
	onDelete = id => {
		if (window.confirm("Bạn có chắc muốn xóa sản phẩm này : ?")) {
			this.props.onDelete(id);
		}
	};
}

export default ProductItem;
