const { constants } = require("crypto");
const { ipcMain } = require("electron");
const  {createInvoice,getAllInvoices,getInvoiceItemsById} = require('./api/invoiceApi');
const {createAccount} = require('./api/accountApi')
// invoice events
ipcMain.on("create-invoice", createInvoice);
ipcMain.on("get-all-invoices",getAllInvoices);
ipcMain.on("get-invoice-items-by-id",getInvoiceItemsById);

// accounts events
ipcMain.on('create-account',createAccount);