import React, { Component } from "react";
import User from './User';

class DeleteUser extends Component {
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
    // TODO: use delete api to send delete request with id
    }
	render() {		
		return (
			<div className="container">
				<h1>Delete User By Id</h1>
                <div className="form-group ">
						<label htmlFor="userId" >User Id:</label>
						<input
							type="text"
							className="form-control m-2"
							placeholder="Enter userId"
							id="userId"
						/>
						<button type="submit" className="btn btn-primary ">
							Submit
						</button>
					</div>
				<User user={this.state.user} />
                <button className="btn btn-danger">Delete</button>
			</div>
		);
	}
}
export default DeleteUser;
