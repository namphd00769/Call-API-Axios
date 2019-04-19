import { combineReducers } from "redux";
import products from "./products";
import itemUpdating from "./itemUpdating";

const appReducer = combineReducers({
	products: products,
	itemUpdating: itemUpdating
});

export default appReducer;
