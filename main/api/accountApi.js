const {connection} = require('../dbConfig');
exports.createAccount = (event,args)=>{
    console.log('accout main process',args);
    event.reply('create-account-result',"account created!!");
}