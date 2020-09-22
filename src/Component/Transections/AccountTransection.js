import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");
class AccountTransection extends Component {
	state = {
		accountInfo: {
			id: 1,
			accountNo: 1,
			name: "narendra malviya",
			phone: "+917742401557",
			address: "hemawas pali rajasthan",
			balance: 120000,
		},
		accountNo: 2,
		// `accountId`,
		// `date`,
		// `description`,
		// `transectionType`,
		// `transectionAmount`,
		// // `lastBalance`)
		transection: {
			accountId: 1,
			date: "2020-09-21",
			transectionAmount: 20000,
			description: "for purchases",
			transectionType: "debit",
			lastBalance: 100000,
		},
	};

	accountTransectionOnChangeHandler = (event) => {
		this.setState({
			transection: {
				...this.state.transection,
				[event.target.name]: event.target.value,
			},
		});
	};
	accountNumberChangeHanlder = (event) => {
		this.setState({
			accountNo: event.target.value,
		});
	};
	transectionSubmitHandler = () => {
		// calculate transection amount and put into last balance of transection
		if (this.state.accountInfo != null) {
			const {
				transectionAmount,
				transectionType,
			} = this.state.transection;
			// destructing account info
			const { balance, id, accountNo } = this.state.accountInfo;
			let updatedBalance;

			if (transectionType == "credit") {
				updatedBalance = balance + transectionAmount;
				this.setState(
					{
						transection: {
							...this.state.transection,
							lastBalance: updatedBalance,
							accountId: id,
						},
					},
					() => {
						emmitUpdateEvent();
					}
				);
			} else {
				updatedBalance = balance - transectionAmount;
				this.setState(
					{
						transection: {
							...this.state.transection,
							lastBalance: updatedBalance,
							accountId: id,
						},
					},
					() => {
						emmitUpdateEvent();
					}
				);
			}

			// update account balance and add transection to db
			const emmitUpdateEvent = () => {
				console.log("state", this.state);
				let transection = { ...this.state.transection };
				ipcRenderer.send("update-account-balace-by-accountNo", {
					accountNo,
					updatedBalance,
					transection,
				});

				ipcRenderer.once(
					"update-account-balace-by-accountNo-reply",
					(event, args) => {
						alert(args);
					}
				);
			};
		}

		// update account balance
	};
	getAccountByAcNumber = () => {
		console.log(" getAccountByAcNumber clicked");
		ipcRenderer.send("get-account-by-number", this.state.accountNo);
		ipcRenderer.once("get-account-by-number-reply", (event, accountObj) => {
			console.log(accountObj);
			this.setState({
				accountInfo: accountObj.accountInfo,
			});
		});
	};
	render() {
		// console.log(this.state);
		return (
			<div className="border border-success rounded">
				<h1>Transection</h1>
				<div className="form-group m-2 w-50">
					<label htmlFor="date">Date</label>
					<input
						className="form-control"
						type="date"
						name="date"
						id="date"
						value={this.state.transection.date}
						onChange={this.accountTransectionOnChangeHandler}
					/>
				</div>
				<div className="form-group m-2 w-50">
					<label htmlFor="accountNo">Account No.</label>
					<input
						type="number"
						className="form-control"
						id="accountNo"
						name="accountNo"
						value={this.state.accountNo}
						onChange={this.accountNumberChangeHanlder}
					/>
				</div>
				<button
					className="btn btn-info m-2"
					onClick={this.getAccountByAcNumber}
				>
					Get Account
				</button>
				<div>
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
				<div className="form-group m-2 w-50">
					<label htmlFor="transectionAmount">Amount</label>
					<input
						type="number"
						className="form-control"
						id="transectionAmount"
						name="transectionAmount"
						value={this.state.transection.transectionAmount}
						onChange={this.accountTransectionOnChangeHandler}
					/>
				</div>
				<div className="form-group m-2 w-50">
					<label htmlFor="description">Description</label>
					<textarea
						type="number"
						className="form-control"
						id="description"
						name="description"
						value={this.state.transection.description}
						onChange={this.accountTransectionOnChangeHandler}
					/>
				</div>
				<div className="custom-control custom-radio custom-control-inline m-2">
					<input
						type="radio"
						id="debit"
						className="custom-control-input"
						checked={
							this.state.transection.transectionType === "debit"
						}
						value="debit"
						name="transectionType"
						onChange={this.accountTransectionOnChangeHandler}
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
						onChange={this.accountTransectionOnChangeHandler}
					/>
					<label className="custom-control-label" htmlFor="credit">
						Credit
					</label>
				</div>
				<button
					onClick={this.transectionSubmitHandler}
					className="btn btn-primary m-2"
				>
					Submit
				</button>
			</div>
		);
	}
}
export default AccountTransection;
