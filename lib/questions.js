module.exports = [
  {
    type: 'input',
    name: 'key',
    message: 'Enter your GDAX key'
  },
  {
    type: 'input',
    name: 'secret',
    message: 'Enter your GDAX secret'
  },
  {
    type: 'input',
    name: 'passphrase',
    message: 'Enter your GDAX passphrase'
  },
  {
    type: 'input',
    name: 'product',
    message: 'Enter the product to trade. Ex: LTC-USD'
  },
  {
    type: 'input',
    name: 'size',
    message: 'Enter the size you\'d like to trade with each command: Ex: 0.01',
    filter: Number
  }
]
