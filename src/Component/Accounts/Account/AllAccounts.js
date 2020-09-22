import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");
class AllAccounts extends Component {
	state = {
		accounts: null
	};
	componentDidMount() {
		ipcRenderer.send("get-all-accounts");
		ipcRenderer.on("all-account", (event, data) => {
			this.setState({
				accounts: data,
			});
		});
	}
	viewAccountDetails = (index) => {
			
	};
	submitHandler = () => {
		// TODO: fetch all users and set in the state
	};
	render() {
		// console.log(this.state.accounts);
		let allAccounts = "";
		if (this.state.accounts !== null) {
			const users = this.state.accounts;
			allAccounts = users.map((account, index) => {
				const { accountNo, name, phone, address, balance } = account;
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{accountNo}</td>
						<td>{name}</td>
						<td>{phone}</td>
						<td>{address}</td>
						<td>{balance}</td>
						<th>
							<button
								onClick={() => this.viewAccountDetails(index)}
							>
								view
							</button>
						</th>
					</tr>
				);
			});
		} else allAccounts = <h1>Loading ...</h1>;
		return (
			<div className="container">
				<h1>All Accounts</h1>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>SR.</th>

							<th>Account No.</th>
							<th>Name</th>
							<th>Phone </th>
							<th>Address </th>
							<th>Balance </th>
							<th></th>
						</tr>
					</thead>
					<tbody>{allAccounts}</tbody>
				</table>
			</div>
		);
	}
}
export default AllAccounts;
