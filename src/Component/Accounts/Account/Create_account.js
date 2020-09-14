import React, { Component } from "react";

class Create_account extends Component {
	state = {
		user: {
			accountNo: "10",
			userId:"",
			name: "nk",
			lastName: "malviya",
			phone: "7742401557",
			address: "pali rajasthan",
			balance: "15000",
		},
	};

	onChangeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	submitHandler = () => {
		console.log("clicked");
		// TODO: 
		// fetch("http://localhost:7000/api/create-account", {
		// 	method: "post",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(this.state),
		// })
		// 	.then((response) => response.json())
		// 	.then((result) => console.log(result))
		// 	.catch((err) => console.log(err));
	};
	render() {
		return (
			<div>
				<h1 className="">Create New Account</h1>
				<div className="form-group">
					<label htmlFor="accountNo">Account No.</label>
					<input
						type="number"
						className="form-control"
						id="accountNo"
						name="accountNo"
						placeholder="Enter Account No."
						onChange={this.onChangeHandler}
						value={this.state.accountNo}
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
					<label htmlFor="balance">Balance</label>
					<input
						type="number"
						className="form-control"
						id="balance"
						placeholder="Enter Balance ex.- 10000"
						name="balance"
						value={this.state.balance}
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

export default Create_account;
