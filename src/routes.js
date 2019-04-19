import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
const routes = [
	{
		path: "/",
		exact: true,
		content: () => <HomePage />
	},
	{
		path: "/product-list",
		exact: true,
		content: () => <ProductListPage />
	},
	{
		path: "/product/add",
		exact: true,
		content: ({ history }) => <ProductActionPage history={history} />
	},
	{
		path: "/product/:id/edit",
		exact: true,
		content: ({ history, match }) => (
			<ProductActionPage history={history} match={match} />
		)
	},
	{
		path: "",
		exact: false,
		content: () => <NotFoundPage />
	}
];

export default routes;
