import React, { Component } from "react";
import "./Purchase.css";
import { Link, Switch, Route } from "react-router-dom";
import PrepareInvoice from "../Invoice/PrepareInvoice";

import AllInvoices from "../Invoice/AllInvoices";
class Purchase extends Component {
	render() {
		const invoiceType = "purchase";
		const currentPath = this.props.match.path;
		return (
			<div className="">
				<div className="jumbotron row border border-success rounded-sm">
					<div className="col-2 border border-success rounded-sm">
						<ul>
							<li>
								<Link
									to={`${currentPath}/all-invoices`}
									className="btn btn-success m-2"
								>
									All Invoices
								</Link>
							</li>
							<li>
								<Link
									to={`${currentPath}/prepare-invoice`}
									className="btn btn-success m-2"
								>
									Prepare Invoice
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-10 border border-success rounded-sm">
						
						<Switch>
							
							<Route
								
								path={`${currentPath}/prepare-invoice`}
								render={()=><PrepareInvoice invoiceType={invoiceType}/>}
							/>
							<Route
								
								path={`${currentPath}/`}
								render={()=><AllInvoices invoiceType={invoiceType} />}
							/>
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}
export default Purchase;
