import React, { Component } from "react";

class AccountTransectionSummary extends Component {
	state = {
		transectionSummary: [
			{
				accountNo: "1",
				date: "2020-04-10",
				description: "for sale",
				transectionType: "credit",
				amount: 1000,
				balance: 50000,
			},
			{
				accountNo: "1",
				date: "2020-05-11",
				description: "cash",
				transectionType: "credit",
				amount: 20000,
				balance: 70000,
			},
			{
				accountNo: "1",
				date: "2020-02-13",
				description: "for sale",
				transectionType: "credit",
				amount: 20000,
				balance: 50000,
			},
			{
				accountNo: "1",
				date: "2020-02-10",
				description: "for sale",
				transectionType: "credit",
				amount: 20000,
				balance: 50000,
			},
			{
				accountNo: "1",
				date: "2020-02-10",
				description: "for sale",
				transectionType: "credit",
				amount: 20000,
				balance: 50000,
			},
			{
				accountNo: "1",
				date: "2020-02-10",
				description: "for sale",
				transectionType: "credit",
				amount: 20000,
				balance: 50000,
			},
			{
				accountNo: "1",
				date: "2020-02-10",
				description: "for sale",
				transectionType: "credit",
				amount: 20000,
				balance: 50000,
			},
			{
				accountNo: "1",
				date: "2020-02-10",
				description: "for sale",
				transectionType: "credit",
				amount: 20000,
				balance: 50000,
			},
			{
				accountNo: "1",
				date: "2020-02-10",
				description: "for sale",
				transectionType: "credit",
				amount: 20000,
				balance: 50000,
			},
		],
		transectionSummaryDates: {
			from: "2020-08-02",
			to: "2020-09-08",
		},
	};
	onDateChangeHandler = (event)=>{
		let dateState = this.state.transectionSummaryDates;
		dateState[event.target.name]= event.target.value;
	    this.setState({transectionSummaryDates:{...dateState}});
	}
	render() {
		console.log(this.state.transectionSummaryDates);
		let transectionSummary = "";
		if (this.state.transectionSummary !== null) {
			const trasectionSummaryArr = [...this.state.transectionSummary];
			transectionSummary = trasectionSummaryArr.map((transec, index) => {
				return (
					<tr key={index}>
						<td>{index+1}</td>
						<td>{transec.accountNo}</td>
						<td>{transec.date}</td>
						<td>{transec.description}</td>
						<td>{transec.amount}</td>
						<td>{transec.transectionType}</td>
						<td>{transec.balance}</td>
					</tr>
				);
			});
		} else transectionSummary = <tr>Loading ...</tr>;
		return (
			<div className="border border-success rounded">
				<h3>All Transection Summary </h3>
				<label htmlFor="from" className="tex m-2">
					Date From
				</label>
				<input
					className=""
					type="date"
					id="from"
					value={this.state.transectionSummaryDates.from}
					name="from"
					onChange={this.onDateChangeHandler}
				/>
				<label htmlFor="to" className="tex m-2">
					To
				</label>
				<input
					className=""
					type="date"
					id="to"
					value={this.state.transectionSummaryDates.to}
					name="to"
					onChange={this.onDateChangeHandler}
				/>
				<button
					onClick={this.summarySubmitButtonHandler}
					className="btn btn-success btn-sm m-2"
				>
					Submit
				</button>
				<div ></div>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>SR.</th>
							<th>Account No</th>
							<th>Date</th>
							<th>Description</th>
							<th>Amount</th>
							<th>Transection Type</th>
							<th>Balance</th>
						</tr>
					</thead>
		<tbody>{transectionSummary}</tbody>
				</table>
			</div>
		);
	}
}

export default AccountTransectionSummary;
