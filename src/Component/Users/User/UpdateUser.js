import React, { Component } from "react";
// import { updateUser } from "./api/api";

class UpdateUser extends Component {
	state = {
		user: {
			userId: "10",
			name: "nk",
			lastName: "malviya",
			phone: "7742401557",
			address: "pali rajasthan",
		},
	};
	onChangeHandler = (event) => {
		this.setState({
			user: {
				...this.state.user,
				[event.target.name]: event.target.value,
			},
		});
	};
	submitHandler = () => {
		// TODO: submit put request for update user
		// updateUser()
	};

	render() {
		return (
			<div>
				<h1 className="">Update User</h1>
				<div className="form-group">
					<label htmlFor="accountNo">User Id</label>
					<input
						type="number"
						className="form-control"
						id="userId"
						name="userId"
						placeholder="Enter User Id"
						onChange={this.onChangeHandler}
						value={this.state.user.userId}
					/>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="Enter Name"
						name="name"
						onChange={this.onChangeHandler}
						value={this.state.user.name}
					/>
					<label htmlFor="lastname">Lastname</label>
					<input
						type="text"
						className="form-control"
						id="lastname"
						placeholder="Enter LastName"
						name="lastName"
						onChange={this.onChangeHandler}
						value={this.state.user.lastName}
					/>
					<label htmlFor="phone">Phone No.</label>
					<input
						type="text"
						className="form-control"
						id="phone"
						placeholder="Enter Phone No."
						name="phone"
						onChange={this.onChangeHandler}
						value={this.state.user.phone}
					/>
					<label htmlFor="address">Address</label>
					<textarea
						type="text"
						className="form-control"
						id="address"
						placeholder="Enter Address"
						name="address"
						value={this.state.user.address}
						onChange={this.onChangeHandler}
					/>
				</div>

				<button
					className="btn btn-primary"
					onClick={this.submitHandler}
				>
					Submit
				</button>
                {JSON.stringify(this.state.user)}
			</div>
		);
	}
}

export default UpdateUser;
