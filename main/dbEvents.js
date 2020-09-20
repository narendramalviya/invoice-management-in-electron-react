const { ipcMain } = require("electron");
const  {createInvoice,getAllInvoices,getInvoiceItemsById} = require('./dbApi.js');
ipcMain.on("create-invoice", createInvoice);
ipcMain.on("get-all-invoices",getAllInvoices);
ipcMain.on("get-invoice-items-by-id",getInvoiceItemsById);
