import React, { Component } from "react";

class CreateUser extends Component {
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
		return (
			<div>
				<h1 className="">Create New User</h1>
				<div className="form-group">
					<label htmlFor="accountNo">User Id</label>
					<input
						type="number"
						className="form-control"
						id="userId"
						name="userId"
						placeholder="Enter User Id"
						onChange={this.onChangeHandler}
						value={this.state.userId}
					/>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="Enter Name"
						name="name"
						onChange={this.onChangeHandler}
						value={this.state.name}
					/>
					<label htmlFor="lastname">Lastname</label>
					<input
						type="text"
						className="form-control"
						id="lastname"
						placeholder="Enter LastName"
						name="lastName"
						onChange={this.onChangeHandler}
						value={this.state.lastName}
					/>
					<label htmlFor="phone">Phone No.</label>
					<input
						type="text"
						className="form-control"
						id="phone"
						placeholder="Enter Phone No."
						name="phone"
						onChange={this.onChangeHandler}
						value={this.state.phone}
					/>
					<label htmlFor="address">Address</label>
					<textarea
						type="text"
						className="form-control"
						id="address"
						placeholder="Enter Address"
						name="address"
						value={this.state.address}
						onChange={this.onChangeHandler}
					/>
				</div>

				<button
					className="btn btn-primary"
					onClick={this.submitHandler}
				>
					Submit
				</button>
			</div>
		);
	}
}

export default CreateUser;
