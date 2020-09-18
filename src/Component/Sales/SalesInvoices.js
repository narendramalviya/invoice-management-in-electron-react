import React, { Component } from "react";
const {ipcRenderer} = window.require('electron');
class SalesInvoices extends Component {
    componentDidMount(){
        console.log('component did mount!!');
        this.getAllInvoices();
    }
	getAllInvoices = () => {
		ipcRenderer.send("get-all-invoices");
		ipcRenderer.once("all-invoices", (event, args) => {
			console.log(args);
		});
	};
	render() {
		return (
			<div>
				<h1>All sales Invoices Apear Here!!</h1>
			</div>
		);
	}
}
export default SalesInvoices;
