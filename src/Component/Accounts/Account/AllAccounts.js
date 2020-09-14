import React, { Component } from "react";

class AllAccounts extends Component {
	state = {
		accounts: [
			{
				userId: "1",
				accountNo:"2",
				name: "nk",
				lastName: "malviya",
				phone: "7742401557",
				address: "pali rajasthan",
				balance:'50000'
			},
			{
				userId: "2",
				accountNo:"3",
				name: "Shiv ",
				lastName: "malviya",
				phone: "9928695184",
				address: "pali rajasthan",
				balance:'5000000'
			},
			{
				userId: "3",
				accountNo:"4",
				name: "sunil",
				lastName: "malviya",
				phone: "988909938",
				address: "Gundoj pali rajasthan",
				balance:'450000'
			},
			{
				userId: "4",
				accountNo:"5",
				name: "kailash",
				lastName: "malviya",
				phone: "797837473",
				address: "pali rajasthan",
				balance:'800000'
			},
		],
	};
	submitHandler = ()=>{
		// TODO: fetch all users and set in the state
	}
	render() {
		let allAccounts = "";
		if (this.state.accounts !== null) {
			const users = this.state.accounts			
			allAccounts=users.map((account, index) => {
				const  {userId, name, lastName, phone, address,balance,accountNo } = account;
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{userId}</td>
						<td>{accountNo}</td>
						<td>{name}</td>
						<td>{lastName}</td>
						<td>{phone}</td>
						<td>{address}</td>
						<td>{balance}</td>
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
							<th>User Id</th>
							<th>Account No.</th>
							<th>Name</th>
							<th>LastName</th>
							<th>Phone </th>
							<th>Address </th>
							<th>Balance </th>
						</tr>
					</thead>
					<tbody>{allAccounts}</tbody>
				</table>
			</div>
		);
	}
}
export default AllAccounts;
