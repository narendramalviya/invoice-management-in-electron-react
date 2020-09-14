import React, { Component } from "react";
class StockSummary extends Component {
	state = {
		stockSummary: [
			{
				category: "item1",
				rate: 120,
				quantity: 1200,
				date: "2020/04/12",
			},
			{
				category: "item2",
				rate: 150,
				quantity: 1500,
				date: "2020/02/12",
			},
			{
				category: "item3",
				rate: 160,
				quantity: 1670,
				date: "2020/01/04",
			},
			{
				category: "item4",
				rate: 200,
				quantity: 2000,
				date: "2020/04/12",
			},
			{
				category: "item5",
				rate: 130,
				quantity: 2100,
				date: "2020/04/12",
			},
			{
				category: "item6",
				rate: 100,
				quantity: 2500,
				date: "2020/04/12",
			},
		],
	};
	render() {
		let stockSummary = "";
		if (this.state.stock !== null) {
			const stockSummaryArr = [...this.state.stockSummary];
			stockSummary = stockSummaryArr.map((item, index) => {
				return (
					<tr key={index}>
						<td>{index + 1}</td>
                        <td>{item.date}</td>
						<td>{item.category}</td>
						<td>{item.rate}</td>
						<td>{item.quantity}</td>
					</tr>
				);
			});
		} else
			stockSummary = (
				<tr>
					<h3>Loading ...</h3>
				</tr>
			);
		return (
			<div className="container  border border-success rounded">
                <h3>Stock Summary </h3>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>SR.</th>
                            <th>Date</th>
							<th>Category</th>
							<th>Rate</th>
							<th>Quantity</th>
						</tr>
					</thead>
					<tbody>{stockSummary}</tbody>
				</table>
			</div>
		);
	}
}
export default StockSummary;
