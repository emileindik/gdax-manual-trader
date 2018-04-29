# gdax-manual-trader
gdax-manual-trader allows you to execute limit and market order with the press of a button. After setting:
* key
* secret
* passphrase
* market to trade
* lot size

You will be able to make trades by entering these default commands, followed by 'enter':
|Command|Action|
|-|-|
|m|limit buy at best bid|
|s|limit sell at best ask|
|mb|market buy|
|ms|market sell|
|c|cancel all open orders|
|q|quit program. will cancel all open orders before quitting|
|fq|quit without cancelling orders|

gdax-manual-trader uses trade data to keep track of best bid and ask. So, the GDAX orderbook may change without a trade actually occurring. In that case, the best_bid and best_ask might be off by a few cents until a trade comes through.

### Usage
```
npm install gdax-manual-trader
node node_modules/gdax-manual-trader/index.js
```
OR
```
git clone https://github.com/emileindik/gdax-manual-trader.git
cd gdax-manual-trader
node index.js
```
