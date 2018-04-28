const Gdax = require('gdax')
const inquirer = require('inquirer')
const config = require('./config')
const questions = require('./questions')
const Actions = require('./actions')
const commandToAction = require('./commandToAction')




class ManualTrader {
  constructor () {
    inquirer.prompt(questions).then(answers => {
      this.answers = answers
      this.actions = new Actions(this.answers)
      this.commandToAction = commandToAction(this.actions)
      this.connect()
      this.loop()
    })
  }

  connect () {
    let ws = new Gdax.WebsocketClient(
      [
        this.answers.product
      ],
      config.websocket,
      {
        key: this.answers.key,
        secret: this.answers.secret,
        passphrase: this.answers.passphrase
      },
      {
        channels: ['ticker']
      }
    )
    
    ws.on('message', data => {
      if (data.type === 'ticker') {
        if (!('time' in data)) return
        this.best_bid = +data.best_bid
        this.best_ask = +data.best_ask
      }
    })
    ws.on('error', err => {
      console.log('error: ', err)
    })
    ws.on('close', () => {
      console.log('connection closed')
    })
  }

  loop () {
    inquirer.prompt([
      {
        type: 'input',
        name: 'command',
        message: 'Enter command'
      }
    ]).then(answers => {
      let c = answers.command

      // if not recognized command, exec = false
      let exec = true
      if (!(c in this.commandToAction)) exec = false
      // if no data yet, exec = false
      if (!this.best_bid || !this.best_ask) exec = false

      // use .call() bc this references commandToAction, not actions
      if (exec) this.commandToAction[c].call(this.actions, this.best_bid, this.best_ask)
      this.loop()
    })
  }

}

let mt = new ManualTrader()



