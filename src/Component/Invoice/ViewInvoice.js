import React, { Component } from "react";
import Invoice from "./Invoice";
const { ipcRenderer } = window.require("electron");
class ViewInvoice extends Component {
	state = {
		invoiceDetail: null,
		invoiceItems: null,
		isLoading: true,
	};
	// console.log(this.props.invoiceDetails);
	componentDidMount() {
		let detail = this.props.invoiceDetail;
		console.log("invoice ComponentDid mount- id ", detail);
		ipcRenderer.send("get-invoice-items-by-id", detail.id);
		ipcRenderer.once("invoice-items-by-id", (event, args) => {
			//    TODO: handle error
			this.setState({
				invoiceItems: args,
				invoiceDetail: detail,
				isLoading: false,
			});
		});
	}
	render() {
		
		let invoice = <p>Loading ...</p>;
		if (this.state.invoiceDetail && this.state.invoiceItems) {
			invoice = (
				<Invoice
					invoiceDetail={this.state.invoiceDetail}
					invoiceItems={this.state.invoiceItems}
					closeInvoiceButtonHandler={
						this.props.closeInvoiceButtonHandler
					}
				/>
			);
		}
		return <div>
			{invoice}
		</div>;
	}
}

export default ViewInvoice;
