import React, { Component } from "react";
import "./Sales.css";
class Sales extends Component {
	state = {
		person: {
			name: "Narendra malviya",
			phone: "+917742401557",
			address: "Pali rajasthann India",
			invoiceNo:'',
			totalAmount:'0.00',
			paymentStatus:"Pending",
			invoiceType:'sales'
		},
		billItemes: [
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
		totalAmount: 0,
	};

	// on change handler for select item and quantity
	personOnChangeHandler = (event) => {
		this.setState({
			person: {
				...this.state.person,
				[event.target.name]: event.target.value,
			},
		});
	};
	billItemOnChangeHandler = (event) => {
		const [name, value] = event.target;
		this.setState({
			item: {
				...this.state.item,
				[name]: value,
			},
		});
	};
	// calculate total amount
	calculateAmount = () => {
		const allItems = [...this.state.billItemes];

		let billAmount = allItems.reduce((total, item) => {
			console.log(item, total);
			return total + item.amount;
		});
		return billAmount;
	};
	// add button handler to adding selected item to list
	addButtonHandler = () => {
		let billItemsState = [...this.state.billItemes];
		const billItem = { ...this.state.item };
		billItemsState.push(billItem);
		// update state & update total amount
		const totalBillAmount = this.calculateAmount();
		this.setState({
			billItemes: billItemsState,
			totalAmount: totalBillAmount,
		});
	};
	removeAddedItem = (index) => {
		// alert(index);
		let oldbillItemes = [...this.state.billItemes];
		// remove item then update
		oldbillItemes.splice(index, 1);

		this.setState({ billItemes: oldbillItemes });
	};
	render() {
		// selected items list
		let billItemes = "";
		if (this.state.billItemes !== null) {
			let billItemState = [...this.state.billItemes];
			billItemes = billItemState.map((item, index) => {
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
		} else
			billItemes = (
				<tr>
					<h3>Loading ...</h3>
				</tr>
			);
		//   TODO: pending work
		//
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
										onChange={this.personOnChangeHandler}
										value={this.state.person.name}
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
										onChange={this.personOnChangeHandler}
										value={this.state.person.phone}
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
										onChange={this.personOnChangeHandler}
										value={this.state.person.address}
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
									/>
								</div>
							</div>
							<div className="form-group row">
								<label
									htmlFor="dueAmount"
									className="col-sm-3 col-form-label"
								>
									Due Amount
								</label>
								<div className="col-sm-5">
									<input
										type="text"
										className="form-control"
										id="dueAmount"
										name="dueAmount"
										placeholder="due amount"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label
									htmlFor="Amount"
									className="col-sm-3 col-form-label"
								>
									Amount
								</label>
								<div className="col-sm-5">
									<input
										type="text"
										className="form-control"
										id="Amount"
										name="amount"
										placeholder="0.00"
									/>
								</div>
							</div>
						</div>
						{JSON.stringify(this.state.person)}
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
							{billItemes}
							<tr className="border ">
								<td colSpan="4">Total</td>
								<td>{this.state.totalAmount}</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
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
							for="listAmount"
							className="col-sm-1 col-form-label"
						>
							Amount
						</label>
						<div className="col-sm-2">
							<input
								type="number"
								className="form-control"
								id="listAmount"
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
				{/* {JSON.stringify(this.state.item)} */}
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
							placeholder="text rate %"
						/>
						<label htmlFor="taxAmount">Tax Amount:</label>
						<input
							type="text"
							id="taxAmount"
							className="form-control"
						/>
						<label htmlFor="totalAmount">Total:</label>
						<input
							type="text"
							id="totalAmount"
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
