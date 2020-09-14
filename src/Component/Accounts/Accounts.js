import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Create_account from "./Account/Create_account";
import All_accounts from "./Account/AllAccounts";
import UpdateAccount from './Account/UpdateAccount';

class Accounts extends Component {
	render() {
		// console.log(this.props);
		return (
			<div className="container">
				<div className="jumbotron row border border-success rounded-sm">
					<div className="col-3 border border-success rounded-sm">
						<Link
							className="btn btn-success m-2"
							to={`${this.props.match.path}/create_account`}
						>
							Create New Account
						</Link>

						<Link
							className="btn btn-success m-2"
							to={`${this.props.match.path}/all_accounts`}
						>
							All Accounts
						</Link>
						<Link
							className="btn btn-success m-2"
							to={`${this.props.match.path}/update_account`}
						>
							Update Account
						</Link>
					</div>
					<div className="col-9 border border-success rounded-sm">
						<Switch>
							<Route
								path={`${this.props.match.path}/create_account`}
								component={Create_account}
							/>
							<Route
								path={`${this.props.match.path}/all_accounts`}
								component={All_accounts}
							/>
							<Route
								path={`${this.props.match.path}/update_account`}
								component={UpdateAccount}
							/>
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}
export default Accounts;
