import React, { Component } from "react";
import User from './User';
// import getUserById from './api/api'

class GetUser extends Component {
	state = {
		user : {
			userId: "10",
			name: "nk",
			lastName: "malviya",
			phone: "7742401557",
			address: "pali rajasthan"
        }
    };
    submitHandler = ()=>{
    // TODO: send to request with server to getUser detail 
    }
	render() {
		
		return (
			<div>
				<h1>Get User By Id</h1>
                <div className="form-group m-2">
						<label htmlFor="userId" >User Id:</label>
						<input
							type="text"
							className="form-control m-2"
							placeholder="Enter userId"
							id="userId"
						/>
						<button type="submit" className="btn btn-primary m-2">
							Submit
						</button>
					</div>
				<User user={this.state.user} />
			</div>
		);
	}
}
export default GetUser;
