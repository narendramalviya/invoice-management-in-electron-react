import React, { Component } from "react";

class AllUsers extends Component {
	state = {
		users: [
			{
				userId: "1",
				name: "nk",
				lastName: "malviya",
				phone: "7742401557",
				address: "pali rajasthan",
			},
			{
				userId: "2",
				name: "Shiv ",
				lastName: "malviya",
				phone: "9928695184",
				address: "pali rajasthan",
			},
			{
				userId: "3",
				name: "sunil",
				lastName: "malviya",
				phone: "988909938",
				address: "Gundoj pali rajasthan",
			},
			{
				userId: "4",
				name: "kailash",
				lastName: "malviya",
				phone: "797837473",
				address: "pali rajasthan",
			},
		],
	};
	submitHandler = ()=>{
		// TODO: fetch all users and set in the state
	}
	render() {
		let allUsers = "";
		if (this.state.users !== null) {
			const users = this.state.users			
			allUsers=users.map((user, index) => {
				const  {userId, name, lastName, phone, address } = user;
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{userId}</td>
						<td>{name}</td>
						<td>{lastName}</td>
						<td>{phone}</td>
						<td>{address}</td>
					</tr>

				);
			});
		} else allUsers = <h1>Loading ...</h1>;
		console.log();
		return (
			<div className="container">
				<h1>All users</h1>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>SR.</th>
							<th>UserId</th>
							<th>Name</th>
							<th>LastName</th>
							<th>Phone </th>
							<th>Address </th>
						</tr>
					</thead>
					<tbody>{allUsers}</tbody>
				</table>
			</div>
		);
	}
}
export default AllUsers;
