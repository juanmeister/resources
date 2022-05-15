const numeral = require('numeral');

module.exports = numberFotmat = {
  moneyFormat: value => numeral(value).format('$0,0[.]00'),
  bytesFormat: value => numeral(value).format(`0[.]0b`),
  porcentagesFormat: value => numeral(value / 100).format('0[.]0%'),
  timeFormat: value => numeral(value).format('00:00:00'),//recibe segundos
}
