import React, { Component } from "react";
import User from '../../Users/User/User';


class GetAccount extends Component {
	state = {
		user : {
            
			userId: "10",
			name: "nk",
			lastName: "malviya",
			phone: "7742401557",
            address: "pali rajasthan",                      
        },
        userAccountDetail:{
            accountNo:"12",
            balance:12232
        },
        showUserDetail:false

    };
    submitHandler = ()=>{
    // TODO: send to request with server to getAccount detail 
    this.setState({ showUserDetail:true});
    }
	render() {		
		return (
			<div className="border border-success rounded">
				<h1>Get Account By Id</h1>
                    <div className="form-group m-2">
						<label htmlFor="userId" >User Id:</label>
						<input
							type="text"
							className="form-control m-2"
							placeholder="Enter userId"
							id="userId"
						/>
						<button onClick={this.submitHandler} type="submit" className="btn btn-primary m-2">
							Submit
						</button>
					</div>
        {this.state.showUserDetail ? <div> <User user={this.state.user} /> {`Balance :${this.state.userAccountDetail.balance}`}</div> :null }
			</div>
		);
	}
}
export default GetAccount;
