import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");
class AccountTransectionSummary extends Component {
	state = {
		accountInfo: {
			id:1,
			accountNo: 1,
			name: "narendra malviya",
			phone: "+917742401557",
			address: "hemawas pali rajasthan",
			balance: 120000,
		},
		accountNo: 12,
		transectionSummary: null,
		transectionSummaryDates: {
			from: "2020-08-02",
			to: "2020-09-08",
		},
	};
	onChangeHandler = (event) => {
		let dateState = this.state.transectionSummaryDates;
		dateState[event.target.name] = event.target.value;
		this.setState({ transectionSummaryDates: { ...dateState } });
	};
	accountNumberChangeHanlder = (event) => {
		this.setState({
			accountNo: event.target.value,
		});
	};
	getAccountByAcNumber = () => {
		console.log(" getAccountByAcNumber clicked");
		ipcRenderer.send("get-account-by-number", this.state.accountNo);
		ipcRenderer.on("get-account-by-number-reply", (event, accountObj) => {
			console.log(accountObj);
			 this.setState({
				accountInfo:accountObj.accountInfo,
				transectionSummary:accountObj.accountSummary
			 })
		});
	};
	render() {
		console.log(this.state);

		let transectionSummary = "";
		if (this.state.transectionSummary !== null) {
			const trasectionSummaryArr = [...this.state.transectionSummary];
			transectionSummary = trasectionSummaryArr.map((transec, index) => {
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{transec.accountId}</td>
						<td>
							{/* convert long date formet to short using Date*/}
							Date :
							{new Date(transec.date).toLocaleDateString(
								"en-US",
								{
									day: "2-digit",
									month: "2-digit",
									year: "numeric",
								}
							)}
						</td>
						<td>{transec.description}</td>
						<td>{transec.transectionAmount}</td>
						<td>{transec.transectionType}</td>
						<td>{transec.lastBalance}</td>
					</tr>
				);
			});
		} else transectionSummary = <tr>Loading ...</tr>;

		return (
			<div className="border border-success rounded">
				<h3>All Transection Summary </h3>
				<label htmlFor="accountNo" className="tex m-2">
					Account No.
				</label>
				<input
					className=""
					type="number"
					id="accountNo"
					value={this.state.accountNo}
					name="accountNo"
					onChange={this.accountNumberChangeHanlder}
				/>

				<label htmlFor="from" className="tex m-2">
					Date From
				</label>
				<input
					className=""
					type="date"
					id="from"
					value={this.state.transectionSummaryDates.from}
					name="from"
					onChange={this.onChangeHandler}
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
					onChange={this.onChangeHandler}
				/>
				<button
					onClick={this.getAccountByAcNumber}
					className="btn btn-success btn-sm m-2"
				>
					Submit
				</button>
				<div className="m-2">
					<table className="border border-sucess">
						<tbody>
							<tr>
								<td>Account No :</td>{" "}
								<td>{this.state.accountInfo.accountNo}</td>
							</tr>
							<tr>
								<td>Name :</td>{" "}
								<td>{this.state.accountInfo.name}</td>
							</tr>
							<tr>
								<td>Phone :</td>{" "}
								<td>{this.state.accountInfo.phone}</td>
							</tr>
							<tr>
								<td>Address :</td>{" "}
								<td>{this.state.accountInfo.address}</td>
							</tr>
							<tr>
								<td>Balance :</td>{" "}
								<td>{this.state.accountInfo.balance}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>SR.</th>
							<th>Account Id</th>
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
