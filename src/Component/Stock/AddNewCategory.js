import React, { Component } from "react";

class AddNewCategory extends Component {
	state = {
		newCategory: {
			category: "new category",
			quantity: 0,
			rate: 0,
		},
	};
	submitHandler = () => {
        alert("clicked!!");
        // TODO: 
	};
	onChangeHandler = (event) => {
		let currentState = { ...this.state.newCategory };
		// change newCategory state object item
		currentState[event.target.name] = event.target.value;
		// change state
		this.setState({ newCategory: currentState });
	};
	render() {
		// console.log(this.state.newCategory);
		return (
			<div className="jumbotron border border-success rounded">
				<h3>Add New Category</h3>
				<div className="">
                    
					<label htmlFor="category"> Category</label>
					<input
						type="text"
						id="category"
						className="form-control"
						placeholder="Category Name "
						name="category"
						onChange={this.onChangeHandler}
						value={this.state.newCategory.category}
					/>
					<label htmlFor="rate"> Item Rate</label>
					<input
						type="text"
						id="rate"
						className="form-control"
						placeholder="Rate of item"
						name="rate"
						onChange={this.onChangeHandler}
						value={this.state.newCategory.rate}
					/>
					<label htmlFor="quantity">Quantity</label>
					<input
						type="text"
						id="quantity"
						className="form-control"
						placeholder="Number of itmes "
						name="quantity"
						onChange={this.onChangeHandler}
						value={this.state.newCategory.quantity}
					/>
				</div>
				<button
					className="btn btn-success mt-2"
					onClick={this.submitHandler}
				>
					submit
				</button>
			</div>
		);
	}
}
export default AddNewCategory;
