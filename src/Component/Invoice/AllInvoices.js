import React, { Component } from "react";
import ViewInvoice from "./ViewInvoice";

const { ipcRenderer } = window.require("electron");
class AllInvoices extends Component {
	state = {
		// array of invoices
		invoices: null,
		loading: true,
		showInvoice: false,
		// single invoice detail
		invoiceDetail: null,
	};

	componentDidMount() {
		// console.log("component did mount!!");
		ipcRenderer.send("get-all-invoices",this.props.invoiceType);
		ipcRenderer.once("all-invoices", (event, args) => {
			this.setState({
				invoices: args,
				loading: false,
			});
		});
	}

	// param@ invoiceId
	//get the object invoice details by index
	viewInvoiceHandler = (invoiceIndex) => {
		let invoiceDetail = {...this.state.invoices[invoiceIndex]};
		this.setState({
			invoiceDetail: invoiceDetail,
			showInvoice: true,
		});
	};
	closeInvoiceButtonHandler = () => {
		this.setState({
			showInvoice: false,
		});
	};

	render() {
		let tableStyle = null;
		let invoice = null
		if (this.state.showInvoice) {
			invoice = (
				<ViewInvoice
				invoiceDetail={this.state.invoiceDetail}
					closeInvoiceButtonHandler={this.closeInvoiceButtonHandler}
				/>
			);

			tableStyle = {
					display:'none'
			}
		}

		let list = (
			<tr>
				<td>Loading ...</td>
			</tr>
		);

		if (!this.state.loading && this.state.invoices) {
			let invoices = this.state.invoices;
			// console.log(invoices);
			list = invoices.map((item, index) => {
				return (
					<>
						<tr key={index}>
							<td>{index + 1}</td>
							<td>
								{/* convert long date formet to short using Date*/}
								{new Date(item.invoiceDate).toLocaleDateString(
									"en-US",
									{
										day: "2-digit",
										month: "2-digit",
										year: "numeric",
									}
								)}
							</td>
							<td>{item.name}</td>
							<td>{item.address}</td>
							<td>{item.phone}</td>
							<td>{item.partyAccountNo}</td>
							<td>{item.invoiceNumber}</td>
							<td>{item.totalTaxAmount}</td>
							<td>{item.totalInvoiceAmount}</td>
							<td>
								<button
									onClick={() =>
										this.viewInvoiceHandler(index)
									}
									className="btn btn-success"
								>
									{" "}
									view
								</button>
							</td>
						</tr>
					</>
				);
			});
		}
		return (
			<div>
				<h1>All {this.props.invoiceType} Invoices :</h1>
				<table className="table table-hover" style={tableStyle}>
					<thead>
						<tr>
							<th>SR.</th>
							<th>Invoice Date</th>
							<th>Name</th>
							<th>Address</th>
							<th>Phone</th>
							<th>Party Account No</th>
							<th>Invoice Number</th>
							<th>Tax Amount</th>
							<th>Total Amount</th>
							<th> </th>
						</tr>
					</thead>
					<tbody>{list}</tbody>
				</table>
				{invoice}
			</div>
		);
	}
}
export default AllInvoices;
