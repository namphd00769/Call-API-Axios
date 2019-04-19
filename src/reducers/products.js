import * as Types from "../constants/ActionType";
import { findIndex } from "lodash";
const initState = [];
const products = (state = initState, action) => {
	switch (action.type) {
		// SHOW ALL PRODUCTS
		case Types.FETCH_PRODUCTS:
			return action.products;
		// DELETE PRODUCT
		case Types.DELETE_PRODUCT:
			let index = findIndex(state, product => {
				return product.id === action.id;
			});
			state.splice(index, 1);
			return [...state];
		// ADD PRODUCT
		case Types.ADD_PRODUCT:
			state.push({
				id: action.product.id,
				name: action.product.name,
				price: action.product.price,
				status: action.product.status
			});
			return [...state];
		// UPDATE PRODUCT
		case Types.UPDATE_PRODUCT:
			let newProductChanged = {
				id: action.product.id,
				name: action.product.name,
				price: action.product.price,
				status: action.product.status
			};
			index = findIndex(state, product => {
				return product.id === action.product.id;
			});
			state[index] = newProductChanged;
			return [...state];
		default:
			return state;
	}
};

export default products;
