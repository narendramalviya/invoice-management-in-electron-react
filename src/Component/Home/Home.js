import React, { Component } from "react";
import './Home.css'
// const {connection} =require('../../dbConfig');

class Home extends Component {
 
	render() {
		// const sql = "SELECT * FROM user";
		// connection.query(sql,(err,result)=>{
		// 	if(err){
		// 		return console.log('err while query ',err);
		// 	}
		// 	console.log('result from db connectionssss',result);
		// })
		return (
			<div className="">
				<div className=" login form-signin mx-auto mt-5 w-25 border border-success rounded p-3">

					<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
					<label htmlFor="inputEmail" className="sr-only">
						Email address
					</label>
					<input
						type="email"
						id="inputEmail"
						className="form-control"
						placeholder="Email address"
						required
						autoFocus	
					/>
					<label htmlFor="inputPassword" className="sr-only">
						Password
					</label>
					<input
						type="password"
						id="inputPassword"
						className="form-control"
						placeholder="Password"
						required
					/>
					<div className="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me" />
							Remember me
						</label>
					</div>
					<button
						className="btn btn-lg btn-primary btn-block"
					
					>
						Sign in 
					</button>
					<p className="mt-5 mb-3 text-muted">&copy;2020-21</p>
				</div>
			</div>
		);
	}
}
export default Home;
