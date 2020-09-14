import React, { Component } from "react";

class User extends Component {
	state = {
		user: {
			userId: "10",
			name: "nk",
			lastName: "malviya",
			phone: "7742401557",
			address: "pali rajasthan",
		},
	};
	render() {
		const { userId, name, lastName, phone, address } = this.props.user;
		return (
			<div>
				<div className="card">
					<div className="card-header">User</div>
					<div className="card-body">
						<p>User Id :{userId}</p>
						<p>Name :{name}</p>
						<p>Last Name :{lastName}</p>
						<p>Phone :{phone}</p>
						<p>Address :{address}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default User;
