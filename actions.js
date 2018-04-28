const Gdax = require('gdax')
const config = require('./config')


class Actions {
  constructor (answers) {
    this.answers = answers
    this.authedClient = new Gdax.AuthenticatedClient(this.answers.key, this.answers.secret, this.answers.passphrase, config.uri)
  }

  order (params, side) {
    this.authedClient[side](params).then(data => {
      console.log(data)
    }).catch(err => console.log(err))
  }

  limitBuy (best_bid, best_ask) {
    this.order({
      price: best_bid,
      size: this.answers.size,
      product_id: this.answers.product,
      post_only: true
    }, 'buy')
  }
  marketBuy (best_bid, best_ask) {
    this.order({
      size: this.answers.size,
      product_id: product,
      type: 'market'
    }, 'buy')
  }

  limitSell (best_bid, best_ask) {
    this.order({
      price: best_ask,
      size: this.answers.size,
      product_id: this.answers.product,
      post_only: true
    }, 'sell')
  }
  marketSell (best_bid, best_ask) {
    this.order({
      size: this.answers.size,
      product_id: this.answers.product,
      type: 'market'
    }, 'sell')
  }

  cancelAll (best_bid, best_ask) {
    this.authedClient.cancelAllOrders({product_id: this.answers.product}).then(data => {
      console.log(data)
    }).catch(err => console.log(err))
  }

  quit () {
    process.exit()
  }
}

module.exports = Actions

