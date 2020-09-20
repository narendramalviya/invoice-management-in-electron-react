import React from "react";
const Invoice = (props) => {
	const {
		name,
		address,
		phone,
		invoiceNumber,
		invoiceDate,
		// igst ,cgst,sgst type taxes
		igst,
		cgst,
		sgst,
		totalTaxAmount,
		totalInvoiceAmount,
		invoiceType,
		partyAccountNo,
	} = props.invoiceDetail;
	// invoiceItems: [
	// 	{
	// 		invoiceDetailsId:"",
	// 		description: "10 pcs. of paper rim",
	// 		hsn_sac_No: "2321",
	// 		quantity: 12,
	// 		rate: 120,
	// 		amount: 1440,
	// 	},
	let items = props.invoiceItems.map((item, index) => (
		<tr key={index+1}>
			<td className="center">{index} </td>
			<td className="left">{item.description}</td>
			<td className="center">{item.quantity}</td>
			<td className="right">{item.rate}</td>
			<td className="right">{item.amount}</td>
		</tr>
	));
	return (
		<div className="container-fluid">
			{JSON.stringify(props.invoiceDetail)}
			{JSON.stringify(props.invoiceItems)}
			<div id="ui-view" data-select2-id="ui-view">
				<div>
					<div className="card">
						<div className="card-header">
							Invoice
							<strong>
								{/* {this.state.invoiceDetail.invoiceNo} */}
							</strong>
							<button
								className="btn btn-sm btn-secondary float-right mr-1 d-print-none"
								onClick={window.print}
								data-abc="true"
							>
								<i className="fa fa-print"></i> Print
							</button>
						</div>
						<div className="card-body">
							<div className="row mb-4">
								<div className="col-sm-4">
									<h6 className="mb-3">Company</h6>
									<div>
										<strong>Mahendra Texiles</strong>
									</div>
									<div>241,Bheru Nagar, Mandiya Road</div>
									<div>Pali, Marwar(Rajasthan) 306401</div>
									<div>Email: bhanwarpatel@gmail.com</div>
									<div>Phone: +919413261176</div>
								</div>
								<div className="col-sm-4">
									<h6 className="mb-3">To:</h6>
									<div>
										<strong>{name}</strong>
									</div>
									<div>{address}</div>

									<div>Phone :{phone}</div>
                                    <div>Email: example@gmail.com</div>
								
								</div>
								<div className="col-sm-4">
									<h6 className="mb-3">Details:</h6>
									<div>
										Invoice No : 
										<strong>{invoiceNumber}</strong>
									</div>
									<div>
										{/* convert long date formet to short using Date*/}
                                        Date :
										{new Date(
											invoiceDate
										).toLocaleDateString("en-US", {
											day: "2-digit",
											month: "2-digit",
											year: "numeric",
										})}
									</div>
									<div>GSTNo: NYC09090390</div>
									<div>Account Name : {name}</div>
                                    <div>Party Account No. :{partyAccountNo}</div>
									<div>
										<strong>
											SWIFT code: 99 8888 7777 6666 5555
										</strong>
									</div>
								</div>
							</div>
							<div className="table-responsive-sm">
								<table className="table table-striped">
									<thead>
                                        <tr>
                                        <td>SR.</td>
                                        <td>Description</td>
                                        <td>Quantity</td>
                                        <td>Rate</td>
                                        <td>Amount</td>
                                        </tr>
                                    </thead>
									<tbody>{items}</tbody>
								</table>
							</div>
							<div className="row">
								<div className="col-lg-4 col-sm-5">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam.
								</div>
								<div className="col-lg-4 col-sm-5 ml-auto">
									<table className="table table-clear">
										<tbody>
											<tr>
												<td className="left">
                                    <strong>Subtotal : </strong>
												</td>
												<td className="right">
													{totalTaxAmount}
												</td>
											</tr>
											<tr>
												
												<td className="right">
													{}
												</td>
											</tr>
											<tr>
												<td className="left">
													<strong>VAT (10%)</strong>
												</td>
												<td className="right">
													$679,76
												</td>
											</tr>
											<tr>
												<td className="left">
													<strong>Total</strong>
												</td>
												<td className="right">
													<strong>$7.477,36</strong>
												</td>
											</tr>
										</tbody>
									</table>
									<button
										className="btn btn-success"
										onClick={
											props.closeInvoiceButtonHandler
										}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Invoice;
