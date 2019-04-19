import React, { Component } from "react";

import { Table } from "reactstrap";

class ProductList extends Component {
	render() {
		return (
			<Table bordered>
				<thead>
					<tr>
						<th>STT</th>
						<th>Mã sản phẩm</th>
						<th>Tên</th>
						<th>Gía</th>
						<th>Trạng Thái</th>
						<th>Hành Động</th>
					</tr>
				</thead>
				<tbody>{this.props.children}</tbody>
			</Table>
		);
	}
}

export default ProductList;
