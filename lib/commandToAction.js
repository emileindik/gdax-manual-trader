module.exports = actions => {
  return {
    b: actions.limitBuy,
    mb: actions.marketBuy,
    s: actions.limitSell,
    ms: actions.marketSell,
    c: actions.cancelAll,
    q: actions.quit,
    fq: actions.forceQuit
  }
}
