import React from "react";
const Invoice = (props) => {
	const {
		name,
		address,
		phone,
		invoiceNumber,
		invoiceDate,
		// igst ,cgst,sgst type taxes
		igstTax,
		cgstTax,
		sgstTax,
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
	let items =
		props.invoiceItems &&
		props.invoiceItems.map((item, index) => (
			<tr key={index}>
				<td className="center">{index + 1} </td>
				<td className="left">{item.description}</td>
				<td className="center">{item.quantity}</td>
				<td className="right">{item.rate}</td>
				<td className="right">{item.amount}</td>
			</tr>
		));
	let company = "";
	let customer = "";
	if (invoiceType === "sales") {
		company = (
			<>
				<div>
					<strong>Mahendra Texiles</strong>
				</div>
				<div>241,Bheru Nagar, Mandiya Road</div>
				<div>Pali, Marwar(Rajasthan) 306401</div>
				<div>Email: bhanwarpatel@gmail.com</div>
				<div>Phone: +919413261176</div>
			</>
		);
		customer = (
			<>
				<div>
					<strong>{name}</strong>
				</div>
				<div>{address}</div>

				<div>Phone :{phone}</div>
				<div>Email: example@gmail.com</div>
			</>
		);
	} else {
		company = (
			<>
				<div>
					<strong>{name}</strong>
				</div>
				<div>{address}</div>

				<div>Phone :{phone}</div>
				<div>Email: example@gmail.com</div>
			</>
		);
		customer = (
			<>
				<div>
					<strong>Mahendra Texiles</strong>
				</div>
				<div>241,Bheru Nagar, Mandiya Road</div>
				<div>Pali, Marwar(Rajasthan) 306401</div>
				<div>Email: bhanwarpatel@gmail.com</div>
				<div>Phone: +919413261176</div>
			</>
		);
	}
	return (
		<div className="container-fluid">
			{/* {JSON.stringify(props.invoiceDetail)}
			{JSON.stringify(props.invoiceItems)} */}
			<div id="ui-view" data-select2-id="ui-view">
				<div>
					<div className="card">
						<div className="card-header">
							<h3>Invoice</h3>
						</div>
						<div className="card-body">
							<div className="row mb-4">
								<div className="col-sm-4">
									<h6 className="mb-3">Company</h6>
									{company}
								</div>
								<div className="col-sm-4">
									<h6 className="mb-3">To:</h6>
									{customer}
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
									<div>
										Party Account No. :{partyAccountNo}
									</div>
									<div>
										<strong>
											SWIFT code: 99 8888 7777 6666 5555
										</strong>
									</div>
								</div>
							</div>
							<div className="table-responsive-sm">
								<table
									className="table table-striped"
									style={{
										borderBottom: "1px solid gainsboro",
									}}
								>
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
								{/* <div className="col-lg-4 col-sm-5">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam.
								</div> */}
								<div className="col-lg-4 col-sm-5 ml-auto">
									<table className="table table-clear">
										<tbody>
											<tr>
												<td className="left">
													<strong>Subtotal : </strong>
												</td>
												<td className="right">
													&#8377;
													{(
														totalInvoiceAmount -
														totalTaxAmount
													).toFixed(2)}
												</td>
											</tr>
											<tr>
												<td className="left">
													<strong>IGST : </strong>
												</td>
												<td className="right">
													{/* if tax 0 then place it zero */}
													{igstTax || 0}%
												</td>
											</tr>
											<tr>
												<td className="left">
													<strong>CGST : </strong>
												</td>
												<td className="right">
													{cgstTax || 0}%
												</td>
											</tr>
											<tr>
												<td className="left">
													<strong>SGST : </strong>
												</td>
												<td className="right">
													{sgstTax || 0}%
												</td>
											</tr>
											<tr>
												<td className="left">
													<strong>
														Tax Amount :
													</strong>
												</td>
												<td className="right">
													&#8377;
													{totalTaxAmount.toFixed(
														2
													) || 0}
												</td>
											</tr>
											<tr>
												<td className="right">{}</td>
												<td className="right">{}</td>
											</tr>
											<tr></tr>
											<tr>
												<td className="left">
													<strong>Total</strong>
												</td>
												<td className="right">
													<strong>
														&#8377;
														{totalInvoiceAmount.toFixed(
															2
														) || 0}
													</strong>
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
									<button
										className="btn btn-info m-1"
										onClick={window.print}
										data-abc="true"
									>
										<i className="fa fa-print"></i> Print
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
