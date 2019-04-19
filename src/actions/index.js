import * as Types from "../constants/ActionType";
import callApi from "../utils/apiCaller";

//SHOW ALL PRODUCT

export const actFetchProductsRequest = () => {
	return dispatch => {
		return callApi("products", "GET", null).then(res => {
			dispatch(actFetchProducts(res.data));
		});
	};
};

export const actFetchProducts = products => {
	return {
		type: Types.FETCH_PRODUCTS,
		products: products
	};
};

// DELETE PRODUCT

export const actDeleteProductRequest = id => {
	return dispatch => {
		return callApi(`products/${id}`, "DELETE", null).then(res => {
			dispatch(actDeleteProduct(id));
		});
	};
};

export const actDeleteProduct = id => {
	return {
		type: Types.DELETE_PRODUCT,
		id: id
	};
};

// ADD PRODUCT

export const actAddProductRequest = product => {
	return dispatch => {
		return callApi("products", "POST", product).then(res => {
			dispatch(actAddProduct(res.data));
		});
	};
};

export const actAddProduct = product => {
	return {
		type: Types.ADD_PRODUCT,
		product: product
	};
};

//  GET PRODUCTS BY ID =====> UPDATE PRODUCT (PRODUCT)

export const actGetProductByIdRequest = id => {
	return dispatch => {
		return callApi(`products/${id}`, "GET", null).then(res => {
			dispatch(actGetProductById(res.data));
		});
	};
};

export const actGetProductById = product => {
	return {
		type: Types.GET_PRODUCT_BY_ID,
		product: product
	};
};

//  GET PRODUCTS BY ID =====> UPDATE PRODUCT (PRODUCT)

export const actUpdateProductRequest = product => {
	return dispatch => {
		return callApi(`products/${product.id}`, "PUT", product).then(res => {
			dispatch(actUpdateProduct(res.data));
		});
	};
};

export const actUpdateProduct = product => {
	return {
		type: Types.UPDATE_PRODUCT,
		product: product
	};
};
