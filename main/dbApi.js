const { connection } = require("./dbConfig");

exports.getInvoiceItemsById = (event, invoiceId) => {
	connection.query(
		`SELECT * FROM invoiceItems WHERE invoiceItems.invoiceDetailsId =${invoiceId}`,
		(err, result) => {		
			if (err) throw err;
			// console.log("invoiceItems :- ", result);
			event.reply("invoice-items-by-id", result);
		}
	);
};

exports.getAllInvoices = (event) => {
	// console.log('main proccess',args);
	let invoices = {};
	connection.query("SELECT * FROM invoiceDetails", (err, result) => {
		// if (err) throw err;
		// // console.log('invoices :- ',result);
		// invoices.invoiceDetails = result;
		// connection.query("SELECT * FROM invoiceItems", (err, result) => {
		if (err) throw err;
		// console.log("invoiceItems :- ", result);
		invoices = result;

		event.reply("all-invoices", invoices);
	});
	// });
};
// helper function for createInvoice();
const insertInvoiceValues = (invoiceId, invoiceItems, event) => {
	let listItemArray = [];
	for (const item of invoiceItems) {
		item.invoiceDetailsId = invoiceId;
		listItemArray.push(Object.values(item));
		//  console.log(item);
	}
	console.log(listItemArray);
	const sql =
		"INSERT INTO invoiceItems(invoiceDetailsId,description,hsnSacNo,quantity,rate,amount)VALUES?";

	connection.query(sql, [listItemArray], function (err, result) {
		if (err) {
			event.reply("invoice-query-result", err);
			return;
		}
		event.reply("invoice-query-result", result);
	});
};
exports.createInvoice = (event, args) => {
	const invoiceDetails = { ...args.invoiceDetails };
	const invoceItemsArray = [...args.invoceItemsArray];
	const listItemTotalAmount = args.listItemTotalAmount;
	// take invoice details values ;
	let invoiceDetailsValues = Object.values(invoiceDetails);
	//console.log(invoiceDetailsValues);

	const sql =
		"INSERT INTO invoiceDetails(name,address,phone,invoiceNumber,invoiceDate,igstTax,cgstTax,sgstTax,totalTaxAmount,totalInvoiceAmount,invoiceType,partyAccountNo) values ?";
	connection.query(sql, [[invoiceDetailsValues]], function (err, result) {
		if (err) throw err;
		let invoiceId = result.insertId;
		console.log(invoiceId);
		insertInvoiceValues(invoiceId, invoceItemsArray, event);
	});
	// console.log('from main',args);
};
