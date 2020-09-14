import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import AccountTransection from "./AccountTransection";
import AccountTransectionSummary from "./AccountTransectionSummary";

class Transection extends Component {
	state = {};

	// date state Handler when chage date this method triggerd
	onSummaryDateChangeHandler = (event) => {
		console.log(event.target.name, event.target.value);
	};
	render() {
		return (
		
			<div className="container">
				<div className="jumbotron row border border-success rounded">
					<div className="col-3 border border-success rounded">
						<ul>
							<li>
								<Link
									to={`${this.props.match.path}/account_transection`}
									className="btn btn-success m-2"
								>
									Account Transection
								</Link>
							</li>
							<li>
								<Link
									to={`${this.props.match.path}/account_transection_summary`}
									className="btn btn-success m-2"
								>
									Account Transection Summary
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-9 border border-success rounded">
						<Switch>
							<Route
								path={`${this.props.match.path}/account_transection`}
								component={AccountTransection}
							/>
							<Route
								path={`${this.props.match.path}/account_transection_summary`}
								component={AccountTransectionSummary}
							/>
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}
export default Transection;
