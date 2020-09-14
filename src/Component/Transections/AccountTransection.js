import React, { Component } from "react";
import GetAccount from '../Accounts/Account/GetAccount';
class AccountTransection extends Component {
    state = {
        transection: {
			accountNo: "2",
			amount: 20000,
			description: "for purchases",
			transectionType: "debit",
		}
    }
    transectionOnChangeHandler = (event) => {
		this.setState({
			transection: {
				...this.state.transection,
				[event.target.name]: event.target.value,
			},
		});
	};
	render() {
		return (
			<div className="border border-success rounded">
				<h1>Transection</h1>
				<GetAccount/>
				<div className="form-group m-2">
					<label htmlFor="accountNo">Account No.</label>
					<input
						type="number"
						className="form-control"
						id="accountNo"
						name="accountNo"
						value={this.state.transection.accountNo}
						onChange={this.transectionOnChangeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						className="form-control"
						id="amount"
						name="amount"
						value={this.state.transection.amount}
						onChange={this.transectionOnChangeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea
						type="number"
						className="form-control"
						id="description"
						name="description"
						value={this.state.transection.description}
						onChange={this.transectionOnChangeHandler}
					/>
				</div>
				<div className="custom-control custom-radio custom-control-inline">
					<input
						type="radio"
						id="debit"
						className="custom-control-input"
						checked={
							this.state.transection.transectionType === "debit"
						}
						value="debit"
						name="transectionType"
						onChange={this.transectionOnChangeHandler}
					/>
					<label className="custom-control-label" htmlFor="debit">
						Debit
					</label>
				</div>
				<div className="custom-control custom-radio custom-control-inline">
					<input
						type="radio"
						id="credit"
						className="custom-control-input"
						checked={
							this.state.transection.transectionType === "credit"
						}
						value="credit"
						name="transectionType"
						onChange={this.transectionOnChangeHandler}
					/>
					<label className="custom-control-label" htmlFor="credit">
						Credit
					</label>
				</div>
				<button
					onClick={this.transectionSubmitButtonHandler}
					className="btn btn-primary"
				>
					Submit
				</button>
			</div>
		);
	}
}
export default AccountTransection;