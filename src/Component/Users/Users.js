import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import CreateUser from "./User/CreateUser";
import GetUser from "./User/GetUser";
import AllUsers from "./User/AllUsers";
import UpdateUser from "./User/UpdateUser";
import DeleteUser from "./User/DeleteUser";

class Users extends Component {
	render() {
		const currentPath = this.props.match.path;

		return (
			<div className="container " border border-success rounded-sm>
				<div className="jumbotron row border border-success rounded-sm">
					<div className="col-3 border border-success rounded-sm">
						<ul>
							<li>
								<Link to={`${currentPath}/create-user`} className="btn btn-success m-2">
									Create New User
								</Link>
							</li>
							<li>
								<Link to={`${currentPath}/getUser`} className="btn btn-success m-2">
									Get User By, User Id
								</Link>
							</li>
							<li>
								<Link to={`${currentPath}/getAll-users`} className="btn btn-success m-2">
									Get All Users
								</Link>
							</li>
							<li>
								<Link to={`${currentPath}/update-user`} className="btn btn-success m-2">
									Update User Details
								</Link>
							</li>
							<li>
								<Link to={`${currentPath}/delete-user`} className="btn btn-success m-2">
									Delete User
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-9 border border-success rounded-sm" >
						<Switch>
							<Route
								path={`${currentPath}/create-user`}
								component={CreateUser}
							/>

							<Route
								path={`${currentPath}/getUser`}
								component={GetUser}
							/>
							<Route
								path={`${currentPath}/getAll-users`}
								component={AllUsers}
							/>
							<Route
								path={`${currentPath}/update-user`}
								component={UpdateUser}
							/>
							<Route
								path={`${currentPath}/delete-user`}
								component={DeleteUser}
							/>
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default Users;
