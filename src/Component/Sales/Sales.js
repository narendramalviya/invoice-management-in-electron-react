import React, { Component } from "react";
import "./Sales.css";
class Sales extends Component {
	state = {
		billDetails: {
			name: "Narendra malviya",
			phone: "+917742401557",
			address: "Pali rajasthann India",
			invoiceNo: "",
			invoiceDate: "2020-09-01",
			taxPercentage: 0,
			taxAmount: 0,
			billAmount: 0,
			taxType: "",
			paymentStatus: "NULL",
			invoiceType: "sales",
		},
		billItems: [
			{
				description: "10 pcs. of paper rim",
				quantity: 12,
				rate: 120,
				amount: 1440,
			},
			{ description: "5 pcs. pen", quantity: 10, rate: 15, amount: 150 },
			{
				description: "10 pcs. ink caritage",
				quantity: 10,
				rate: 300,
				amount: 3000,
			},
		],
		item: {
			description: "10 pcs. of paper rim",
			quantity: 10,
			rate: 120,
			amount: 1200,
		},
		listItemAmountTotal: 0,
		dueAmount: 0,
		paidAmount: 0,
	};

	// on change handler for select item and quantity
	billDetailsOnChangeHandler = (event) => {
		const { name, value } = event.target;
		this.setState({
			billDetails: {
				...this.state.billDetails,
				[name]: value,
			},
		});
	};
	billItemOnChangeHandler = (event) => {
		const { name, value } = event.target;
		this.setState({
			item: {
				...this.state.item,
				[name]: value,
			},
		});
	};
	// calculate total amount of list items
	calculateAmount = () => {
		const allItems = [...this.state.billItems];
		// get total list items amount
		let listItemsAmount = allItems.reduce((total, item) => {
			return total + item.amount;
		});
		// calulate tax amount based on tax rate in percentage
		const taxRate = this.state.billDetails.taxPercentage;
		let taxAmount = (listItemsAmount * taxRate) / 100;
		// final bill amount = (tax Amount + list item amount )
		let totalBillAmount = listItemsAmount + taxAmount;

		// updating state for all amounts - list items amount,total bill amount and tax amount
		this.setState({
			billDetails:{
				...this.state.billDetails,
				billAmount:totalBillAmount,
				taxAmount:taxAmount
			},
			listItemAmountTotal:listItemsAmount
			
		});
	};
	// add button handler to adding selected item to list
	addButtonHandler = () => {
		let billItemsState = [...this.state.billItems];
		const billItem = { ...this.state.item };
		billItemsState.push(billItem);
		// update state and update total amount calling calculateAmount function 
		// after updating state
		
		this.setState({
			billItems: billItemsState,
		},()=>{
			this.calculateAmount();
		});
	};
	removeAddedItem = (index) => {
		// alert(index);
		let oldbillItems = [...this.state.billItems];
		// remove item then update state
		oldbillItems.splice(index, 1);

		this.setState({ billItems: oldbillItems });
	};
	render() {
		// selected items list
		let billItems = "";
		if (this.state.billItems !== null) {
			let billItemState = [...this.state.billItems];
			billItems = billItemState.map((item, index) => {
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{item.description}</td>
						<td>{item.rate}</td>
						<td>{item.quantity}</td>
						<td>{item.amount}</td>
						<td>
							<button
								onClick={() => this.removeAddedItem(index)}
								className="btn btn-danger"
							>
								Remove
							</button>
						</td>
					</tr>
				);
			});
		} else {
			billItems = (
				<tr>
					<h3>Loading ...</h3>
				</tr>
			);
		}
		//   TODO: pending work
		
		return (
			<div className="container border border-success rounded">
				<h3> Sales </h3>
				<div className="border border-success rounded ">
					<div className="row m-4">
						<div className="col-7">
							<div className="form-group row">
								<label
									for="name"
									className="col-sm-2 col-form-label"
								>
									Name
								</label>
								<div className="col-sm-5">
									<input
										type="text"
										className="form-control"
										id="name"
										onChange={
											this.billDetailsOnChangeHandler
										}
										value={this.state.billDetails.name}
										name="name"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label
									for="phone"
									className="col-sm-2 col-form-label"
								>
									Phone
								</label>
								<div className="col-sm-5">
									<input
										type="text"
										className="form-control"
										id="phone"
										onChange={
											this.billDetailsOnChangeHandler
										}
										value={this.state.billDetails.phone}
										name="phone"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label
									for="address"
									className="col-sm-2 col-form-label"
								>
									Address
								</label>
								<div className="col-sm-5">
									<textarea
										type="text"
										className="form-control"
										id="address"
										onChange={
											this.billDetailsOnChangeHandler
										}
										value={this.state.billDetails.address}
										name="address"
									/>
								</div>
							</div>
						</div>

						<div className="col-5">
							<div className="form-group row ">
								<label
									htmlFor="invoieDate"
									className="col-sm-3 col-form-label"
								>
									Invoice No.
								</label>
								<div className="col-sm-5">
									<input
										type="text"
										className="form-control"
										id="invoiceNo"
										name="invoiceNo"
										placeholder="invoice no."
										onChange={
											this.billDetailsOnChangeHandler
										}
										value={this.state.billDetails.invoiceNo}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label
									htmlFor="invoieDate"
									className="col-sm-3 col-form-label"
								>
									Invoice date
								</label>
								<div className="col-sm-5">
									<input
										type="Date"
										className="form-control"
										id="invoiceDate"
										name="invoiceDate"
										placeholder="date"
										onChange={
											this.billDetailsOnChangeHandler
										}
										value={
											this.state.billDetails.invoiceDate
										}
									/>
								</div>
							</div>

							<div className="form-group row">
								<label
									htmlFor="billAmount"
									className="col-sm-3 col-form-label"
								>
									Amount
								</label>
								<div className="col-sm-5">
									<input
										type="text"
										className="form-control"
										id="billAmount"
										name="billAmount"
										placeholder="0.00"
										onChange={
											this.billDetailsOnChangeHandler
										}
										value={
											this.state.billDetails.billAmount
										}
									/>
								</div>
							</div>
						</div>
						{JSON.stringify(this.state.billDetails)}
					</div>

					{/* items form  */}
					<br />
				</div>

				<div className="border border-success rounded p-3">
					<h3>Purchased List</h3>
					<table className="table table-hover">
						<thead>
							<tr>
								<th>SR.</th>
								<th>Item Name</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Amount</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{billItems}
							<tr className="border ">
								<td colSpan="4">Total</td>
								<td>{this.state.listItemAmountTotal}</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
				{/* Bill item form */}
				<div className="border border-success rounded p-3">
					<p>Items Details</p>
					<div className="form-group row">
						<label
							for="description"
							className="col-sm-1 col-form-label"
						>
							Description
						</label>
						<div className="col-sm-5">
							<textarea
								type="text"
								className="form-control"
								id="description"
								onChange={this.billItemOnChangeHandler}
								value={this.state.item.description}
								name="description"
							/>
						</div>
					</div>

					<div className="form-group row">
						<label
							for="quantity"
							className="col-sm-1 col-form-label"
						>
							Quantity
						</label>
						<div className="col-sm-2">
							<input
								type="number"
								className="form-control "
								id="quantity"
								onChange={this.billItemOnChangeHandler}
								value={this.state.item.quantity}
								name="quantity"
							/>
						</div>

						<label for="rate" className="col-sm-1 col-form-label">
							Rate
						</label>
						<div className="col-sm-2">
							<input
								type="number"
								className="form-control"
								id="rate"
								onChange={this.billItemOnChangeHandler}
								value={this.state.item.rate}
								name="rate"
							/>
						</div>

						<label
							for="itemAmount"
							className="col-sm-1 col-form-label"
						>
							Amount
						</label>
						<div className="col-sm-2">
							<input
								type="number"
								className="form-control"
								id="itemAmount"
								onChange={this.billItemOnChangeHandler}
								value={this.state.item.amount}
								name="amount"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-6"></div>
					</div>
				</div>
				{JSON.stringify(this.state.item)}
				<div className="row mb-2">
					<div className="col-9 mt-2">
						<button
							className="btn btn-success w-50"
							onClick={this.addButtonHandler}
						>
							add
						</button>
					</div>
					<div className="col-3 ">
						<label htmlFor="tax">Tax:</label>
						<input
							type="text"
							id="tax"
							className="form-control"
							placeholder="tax rate %"
						/>
						<label htmlFor="taxType">Tax Type:</label>
						<input
							type="text"
							id="taxType"
							className="form-control"
							placeholder="SGST/CGST..."
						/>
						<label htmlFor="taxAmount">Tax Amount:</label>
						<input
							type="text"
							id="taxAmount"
							className="form-control"
						/>

						<label htmlFor="totalBillAmount">Total:</label>
						<input
							type="text"
							id="totalBillAmount"
							className="form-control"
						/>
						<label htmlFor="due">Amount Due:</label>
						<input
							type="text"
							id="subTotal"
							className="form-control"
						/>
						<label htmlFor="amountPaid">Amount Paid:</label>
						<input
							type="text"
							id="amountPaid"
							className="form-control"
						/>
					</div>
				</div>
				<div className="">
					<button type="button" class="btn btn-success btn-lg m-2">
						Save
					</button>
					<button type="button" class="btn btn-primary btn-lg m-2">
						Print
					</button>
				</div>
			</div>
		);
	}
}
export default Sales;
