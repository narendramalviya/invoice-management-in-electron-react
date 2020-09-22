const { ipcMain } = require("electron");
const {
	createInvoice,
	getAllInvoices,
	getInvoiceItemsById,
} = require("./api/invoiceApi");
const {
	createAccount,
	getAllAccount,
	getAccount,
	updateAccountBalanceByAccountNo,
} = require("./api/accountApi");

// invoice events
ipcMain.on("create-invoice", createInvoice);
ipcMain.on("get-all-invoices", getAllInvoices);
ipcMain.on("get-invoice-items-by-id", getInvoiceItemsById);

// accounts events
ipcMain.on("create-account", createAccount);
ipcMain.on("get-all-accounts", getAllAccount);
ipcMain.on("get-account-by-number", getAccount);
ipcMain.on(
	"update-account-balace-by-accountNo",
	updateAccountBalanceByAccountNo
);
