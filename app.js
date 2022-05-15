const {bytesFormat, moneyFormat, porcentagesFormat, timeFormat} = require('./numberFormat');

console.log(bytesFormat(10)); 
console.log(moneyFormat(1000)); 
console.log(porcentagesFormat(10));
console.log(timeFormat(420));