import React, { Component } from "react";
// import { Link, Route, Switch } from "react-router-dom";
import "./PrepareInvoice.css";
import ViewInvoice from "../Sales/ViewInvoice";
const {ipcRenderer} = window.require('electron');

class PrepareInvoice extends Component {
	state = {
		invoiceDetails: {
			name: "Narendra malviya",
			address: "Pali rajasthann India",
			phone: "+917742401557",
			invoiceNo: "1012024565",
			invoiceDate: "2020-09-01",
			// igst ,cgst,sgst type taxes
			igst: 10,
			cgst: 5,
			sgst: 7,
			totalTaxAmount: 0,
			totalInvoiceAmount: 0,
			invoiceType: "sales",
			partyAccountNo: "70290124",
		},
		invoiceItems: [
			{
				invoiceDetailsId:"",
				description: "10 pcs. of paper rim",
				hsn_sac_No: "2321",
				quantity: 12,
				rate: 120,
				amount: 1440,
			},
			{ invoiceDetailsId:"",description: "5 pcs. pen",hsn_sac_No: "2321", quantity: 10, rate: 15, amount: 150 },
			{
				invoiceDetailsId:"",
				description: "10 pcs. ink caritage",
				hsn_sac_No: "2321",
				quantity: 10,
				rate: 300,
				amount: 3000,
			},
		],
		item: {
			invoiceDetailsId:"",
			description: "10 pcs. of paper rim",
			hsn_sac_No: "2321",
			quantity: 10,
			rate: 120,
			amount: 1200,
		},
		listItemAmountTotal: 0,
		previewInvoice: true,
	};
	componentDidMount() {
		this.setState({
			invoiceDetails: {
				...this.state.invoiceDetails,
				invoiceType: "sales",
			},
		});
	}
	createInvoice = () => {
		console.log('create invoice called!!');
		const invoiceDetails = {...this.state.invoiceDetails}
		const invoceItemsArray = [...this.state.invoiceItems];
		const listItemTotalAmount = this.state.listItemAmountTotal;		
		const invoiceData = {invoiceDetails,invoceItemsArray,listItemTotalAmount};
		ipcRenderer.send('create-invoice',invoiceData);

		ipcRenderer.once('invoice-query-result',(event,args)=>{
			console.log(args);
			// ipcRenderer.removeAllListeners('created-invoice-result');
		})
		console.log('end of function');
	};
	// on change handler for
	invoiceDetailsOnChangeHandler = (event) => {
		const { name, value } = event.target;

		this.setState({
			invoiceDetails: {
				...this.state.invoiceDetails,
				[name]: value,
			},
		});
	};
	// mehtod for updating item state
	invoiceItemOnChangeHandler = (event) => {
		const { name, value } = event.target;
		let itemState = { ...this.state.item };
		//    get old item state and update new changed value

		itemState[name] = value;
		// updating amount for each item based on quantity and item rate
		let amount = itemState.quantity * itemState.rate;

		itemState.amount = amount;
		this.setState({
			item: itemState,
		});
	};
	// calculate total amount of list items
	calculateAmount = () => {
		// alert('clicked!!')
		const allItems = [...this.state.invoiceItems];
		// get total list items amount

		let listItemsAmount = 0;
		for (const item of allItems) {
			listItemsAmount += item.amount;
		}

		// calulate isgt,cgst,sgst taxes amount ,based on tax rate in percentage

		const igstTaxRate = this.state.invoiceDetails.igst;
		const cgstTaxRate = this.state.invoiceDetails.cgst;
		const sgstTaxRate = this.state.invoiceDetails.sgst;

		let taxAmount =
			(listItemsAmount * igstTaxRate) / 100 +
			(listItemsAmount * cgstTaxRate) / 100 +
			(listItemsAmount * sgstTaxRate) / 100;
		// toFixed() set two digit after decimal points
		// returns string formeted number
		// so place + sign before the string ,to convert string to number
		//example :-  3445.337 --> 3445.34

		// final invoice amount = (tax Amount + list item amount )
		let totalInvoiceAmount = listItemsAmount + taxAmount;

		// updating state for all amounts -> list items amount,total bill amount and tax amount
		this.setState({
			invoiceDetails: {
				...this.state.invoiceDetails,
				totalInvoiceAmount: totalInvoiceAmount,
				totalTaxAmount: taxAmount,
			},
			listItemAmountTotal: listItemsAmount,
		});
	};
	// add button handler to adding selected item to list
	addButtonHandler = () => {
		let invoiceItemsState = [...this.state.invoiceItems];
		const billItem = { ...this.state.item };
		invoiceItemsState.push(billItem);
		// update state and update total amount calling calculateAmount function
		// after updating state

		this.setState(
			{
				invoiceItems: invoiceItemsState,
			},
			() => {
				this.calculateAmount();
			}
		);
	};
	removeAddedItem = (index) => {
		// alert(index);
		let oldinvoiceItems = [...this.state.invoiceItems];
		// remove item then update state
		oldinvoiceItems.splice(index, 1);

		this.setState({ invoiceItems: oldinvoiceItems }, () => {
			this.calculateAmount();
		});
	};
	render() {
		const currentPath = this.props.match.path;
		// selected items list
		let invoiceItems = "";
		if (this.state.invoiceItems !== null) {
			let invoiceItemState = [...this.state.invoiceItems];
			invoiceItems = invoiceItemState.map((item, index) => {
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{item.hsn_sac_No}</td>
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
			invoiceItems = (
				<tr>
					<h3>Loading ...</h3>
				</tr>
			);
		}
		//   preview invoice
		let previewInvoice = null;
		if (
			this.state.previewInvoice &&
			this.state.invoiceDetails !== null &&
			this.state.invoiceItems
		) {
			const invoiceDetails = {
				...this.state.invoiceDetails,
				invoiceItems: [...this.state.invoiceItems],
				...this.state.listItemAmountTotal,
			};
			previewInvoice = <ViewInvoice invoiceDetails={invoiceDetails} />;
		}
		return (
			<div className="">
				<div className="border border-success rounded mt-4">
					<div className="row m-2 ">
						<div className="col-7">
							<div className="form-group row">
								<label
									htmlFor="name"
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
											this.invoiceDetailsOnChangeHandler
										}
										value={this.state.invoiceDetails.name}
										name="name"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label
									htmlFor="phone"
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
											this.invoiceDetailsOnChangeHandler
										}
										value={this.state.invoiceDetails.phone}
										name="phone"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label
									htmlFor="address"
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
											this.invoiceDetailsOnChangeHandler
										}
										value={
											this.state.invoiceDetails.address
										}
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
											this.invoiceDetailsOnChangeHandler
										}
										value={
											this.state.invoiceDetails.invoiceNo
										}
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
											this.invoiceDetailsOnChangeHandler
										}
										value={
											this.state.invoiceDetails
												.invoiceDate
										}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label
									htmlFor="partyAccountNo"
									className="col-sm-3 col-form-label"
								>
									Account No.
								</label>
								<div className="col-sm-5">
									<input
										type="number"
										className="form-control"
										id="partyAccountNo"
										placeholder="PartyAccount"
										name="partyAccountNo"
										value={this.state.invoiceDetails.partyAccountNo}
										onChange={this.invoiceDetailsOnChangeHandler}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label
									htmlFor="totalInvoiceAmount"
									className="col-sm-3 col-form-label"
								>
									Amount
								</label>
								<div className="col-sm-5">
									<input
										type="number"
										className="form-control"
										id="totalInvoiceAmount"
										name="totalInvoiceAmount"
										placeholder="0.00"
										value={
											this.state.invoiceDetails
												.totalInvoiceAmount
										}
										disabled
									/>
								</div>
							</div>
						</div>
						{JSON.stringify(this.state.invoiceDetails)}
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
								<th>SN/SAC</th>
								<th>Item Name</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Amount</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{invoiceItems}
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
							htmlFor="description"
							className="col-sm-1 col-form-label"
						>
							Description
						</label>
						<div className="col-sm-5">
							<textarea
								type="text"
								className="form-control"
								id="description"
								onChange={this.invoiceItemOnChangeHandler}
								value={this.state.item.description}
								name="description"
							/>
						</div>
					</div>

					<div className="form-group row">
						<label
							htmlFor="hsn_sac"
							className="col-sm-1 col-form-label"
						>
							HSN/SAC
						</label>
						<div className="col-sm-2">
							<input
								type="text"
								className="form-control "
								id="hsn_sac"
								onChange={this.invoiceItemOnChangeHandler}
								value={this.state.item.hsn_sac_No}
								name="hsn_sac_No"
							/>
						</div>
						<label
							htmlFor="quantity"
							className="col-sm-1 col-form-label"
						>
							Quantity
						</label>
						<div className="col-sm-2">
							<input
								type="number"
								className="form-control "
								id="quantity"
								onChange={this.invoiceItemOnChangeHandler}
								value={this.state.item.quantity}
								name="quantity"
							/>
						</div>

						<label
							htmlFor="rate"
							className="col-sm-1 col-form-label"
						>
							Rate
						</label>
						<div className="col-sm-2">
							<input
								type="number"
								className="form-control"
								id="rate"
								onChange={this.invoiceItemOnChangeHandler}
								value={this.state.item.rate}
								name="rate"
							/>
						</div>

						<label
							htmlFor="itemAmount"
							className="col-sm-1 col-form-label"
						>
							Amount
						</label>
						<div className="col-sm-2">
							<input
								type="number"
								className="form-control"
								id="itemAmount"
								// onChange={this.invoiceItemOnChangeHandler}
								value={this.state.item.amount}
								name="amount"
								disabled
							/>
						</div>
					</div>
					{JSON.stringify(this.state.item)}
					<div className="row">
						<div className="col-6"></div>
					</div>
				</div>
				{/* {JSON.stringify(this.state.item)} */}
				{/* add item button */}
				<div className="row mb-2">
					<div className="col-9 mt-2">
						<button
							className="btn btn-success w-50"
							onClick={this.addButtonHandler}
						>
							add
						</button>
					</div>
					{/* tax rate ,tax amount and grand total  */}
					<div className="col-3">
						<label htmlFor="igst">IGST:</label>
						<input
							type="number"
							id="igst"
							className="form-control"
							onChange={this.invoiceDetailsOnChangeHandler}
							value={this.state.invoiceDetails.igst}
							name="igst"
						/>
						<label htmlFor="cgst">CGST:</label>
						<input
							type="number"
							id="cgst"
							className="form-control"
							onChange={this.invoiceDetailsOnChangeHandler}
							value={this.state.invoiceDetails.cgst}
							name="cgst"
						/>
						<label htmlFor="sgst">SGST:</label>
						<input
							type="number"
							id="sgst"
							className="form-control"
							onChange={this.invoiceDetailsOnChangeHandler}
							value={this.state.invoiceDetails.sgst}
							name="sgst"
						/>
						<label htmlFor="totalTaxAmount">Tax Amount:</label>
						<input
							type="number"
							id="totalTaxAmount"
							className="form-control"
							// onChange={this.invoiceDetailsOnChangeHandler}
							value={this.state.invoiceDetails.totalTaxAmount}
							name="totalTaxAmount"
							disabled
						/>
						<label htmlFor="totalInvoiceAmount">Total:</label>
						<input
							type="number"
							id="totalInvoiceAmount"
							className="form-control"
							onChange={this.invoiceDetailsOnChangeHandler}
							value={this.state.invoiceDetails.totalInvoiceAmount}
							name="totalInvoiceAmount"
							disabled
						/>
						<button
							className="btn btn-success btn mt-2"
							onClick={this.calculateAmount}
						>
							Done
						</button>
					</div>
				</div>
				<br />
				{previewInvoice}
				<button
					type="button"
					className="btn btn-success btn-lg m-2"
					onClick={this.createInvoice}
				>
					Save
				</button>
			</div>
		);
	}
}
export default PrepareInvoice;
