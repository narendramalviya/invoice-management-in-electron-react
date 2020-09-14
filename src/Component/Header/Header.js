import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div className="bg bg-success">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item ">
								<NavLink className="nav-link" to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/users">
									Users
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/transection">
									Transection
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/accounts">
									Accounts
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/sales">
									Sales
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/stock">
									Stock
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
export default Header;
