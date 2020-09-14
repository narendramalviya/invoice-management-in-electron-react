import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import StockSummary from "./StockSummary";
import AddNewCategory from './AddNewCategory';

class Stock extends Component {
	state = {
		stock: [
			{
				category: "item1",
				rate: 120,
				quantity: 1200,
			},
			{
				category: "item2",
				rate: 150,
				quantity: 1500,
			},
			{
				category: "item3",
				rate: 160,
				quantity: 1670,
			},
			{
				category: "item4",
				rate: 200,
				quantity: 2000,
			},
			{
				category: "item5",
				rate: 130,
				quantity: 2100,
			},
			{
				category: "item6",
				rate: 100,
				quantity: 2500,
			},
		],
		
	};
	render() {
		const currenPath = this.props.match.path;
		let stock = "";
		if (this.state.stock !== null) {
			const stockArr = [...this.state.stock];
			stock = stockArr.map((item, index) => {
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{item.category}</td>
						<td>{item.rate}</td>
						<td>{item.quantity}</td>
					</tr>
				);
			});
		} else
			stock = (
				<tr>
					<h3>Loading ...</h3>
				</tr>
			);
		return (
			<div className="container border border-success rounded ">
				<h3 className="border border-success rounded m-2">Stock</h3>
				<div className="row border border-success rounded">
					<div className="col-3 border border-success rounded">
						<ul>
							<li>
								<Link
									to={`${currenPath}/stock_summary`}
									className="btn btn-success m-2"
								>
									Stock Summary
								</Link>
							</li>
							<li>
								<Link
									to={`${currenPath}/add_new_category`}
									className="btn btn-success m-2"
								>
									Add new Category
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-9 border border-success rounded">
						<div className="mt-2 border border-success rounded">
							<h3>Stock</h3>
							<table className="table table-hover">
								<thead>
									<tr>
										<th>SR.</th>
										<th>Category</th>
										<th>Rate</th>
										<th>Quantity</th>
									</tr>
								</thead>
								<tbody>{stock}</tbody>
							</table>
						</div>
						<div className="mt-2">
							<Route
								path={`${currenPath}/stock_summary`}
								component={StockSummary}
							/>
						    <Route
								path={`${currenPath}/add_new_category`}
								component={AddNewCategory}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Stock;
