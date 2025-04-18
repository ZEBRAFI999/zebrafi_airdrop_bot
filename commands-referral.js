module.exports = async function(ctx) {
  const userId = ctx.from.id;
  const username = ctx.from.username || userId;
  const link = https://t.me/Alexanderzebrafi?start=${userId};
  ctx.reply(Share your referral link to earn bonus ZRFI:\n${link});
};