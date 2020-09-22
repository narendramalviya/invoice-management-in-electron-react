const { connection } = require("../dbConfig");
// TODO: handler errors and validation
exports.createAccount = (event, args) => {
	// console.log("accout main process", args);
	event.reply("create-account-result", "account created!!");
};

exports.getAllAccount = (event) => {
	let sql = "SELECT * FROM account;";
	connection.query(sql, (err, data) => {
		if (err) throw err;

		event.reply("all-account", data);
	});
};
exports.getAccount = (event, accountNo) => {
	let sql = `SELECT * FROM account WHERE accountNo = '${accountNo}'`;
	connection.query(sql, (err, accountInfo) => {
        if (err) throw err;
        accountInfo = {...accountInfo[0]}
        // console.log(accountInfo);
		let sql2 = `SELECT * FROM accountStatement WHERE accountId = '${accountInfo.id}'`;
		connection.query(sql2, (err, accountSummary) => {
            if (err) throw err;
            // console.log(accountSummary);
           let accountObj= {accountInfo,accountSummary};
			event.reply("get-account-by-number-reply", accountObj);
		});
	});
};

exports.updateAccountBalanceByAccountNo = (event,data)=>{
    const {accountNo,updatedBalance,transection} = data;
    console.log('updateAccountBalanceByAccountNo ',data);
    let sql = `UPDATE account SET balance = '${updatedBalance}' WHERE accountNo = '${accountNo}'`;

    connection.query(sql, (err, updatedAccount) => {
        if (err) throw err;
        console.log(updatedAccount);
        addAccountSummary(transection);
        event.reply("update-account-balace-by-accountNo-reply", updatedAccount);
    });    
}

const addAccountSummary = (transection)=>{
   
    let sql = "INSERT INTO accountStatement(accountId,date,transectionAmount, description,transectionType,lastBalance) VALUES?";
    console.log('addAccountSummary ',transection);
    // transection is object 
    // we need array of values to be query in db
    let values = Object.values(transection);
    connection.query(sql,[[values]], (err, result) => {
        if (err) throw err;
    });

}