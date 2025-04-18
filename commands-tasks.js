module.exports = async function(ctx) {
  const message = `
Complete the following tasks to earn ZRFI:

1. Join Telegram Channel - 250 ZRFI
2. Follow YouTube Channel - 350 ZRFI
3. Follow Twitter (X) - 250 ZRFI
4. Follow Instagram - 250 ZRFI
5. Watch YouTube Video (1 Min) - 500 ZRFI
6. Join Discord - 250 ZRFI

Use /wallet to submit your BEP20 wallet address.
Use /referral to get your referral link.
Use /balance to check your total ZRFI.
  `;
  ctx.reply(message);
};