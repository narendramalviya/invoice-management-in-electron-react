const { ipcMain } = require("electron");
const  {createInvoice,getAllInvoices} = require('./dbApi.js');
ipcMain.on("create-invoice", createInvoice);
ipcMain.on("get-all-invoices",getAllInvoices);
