import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");
// TODO: form validation
class Create_account extends Component {
	state = {
		user: {
			accountNo: "",
			name: "",
			phone: "",
			address: "",
			balance: "",
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
		ipcRenderer.send("create-account", this.state.user);
		ipcRenderer.on("create-account-result", (event, result) => {
			alert(JSON.stringify(result));
			console.log("result from create event - ", result);
		});
	};
	render() {
		return (
			<div>
				<h1 className="">Create New Account</h1>
				<div className="form-group w-50 m-2">
					<label htmlFor="accountNo">Account No.</label>
					<input
						type="number"
						className="form-control"
						id="accountNo"
						name="accountNo"
						placeholder="Enter Account No."
						onChange={this.onChangeHandler}
						value={this.state.user.accountNo}
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
					<label htmlFor="balance">Balance</label>
					<input
						type="number"
						className="form-control"
						id="balance"
						placeholder="Enter Balance ex.- 10000"
						name="balance"
						value={this.state.user.balance}
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
