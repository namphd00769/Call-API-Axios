import * as Types from "../constants/ActionType";
const initState = {
	id: "",
	name: "",
	price: 0,
	status: false
};

const products = (state = initState, action) => {
	switch (action.type) {
		case Types.GET_PRODUCT_BY_ID:
			return action.product;
		default:
			return state;
	}
};
export default products;
