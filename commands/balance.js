module.exports = async function(ctx) {
  const userId = ctx.from.id;
  const doc = await require("../firebase").collection("users").doc(userId.toString()).get();
  const data = doc.exists ? doc.data() : {};
  const balance = data.balance || 0;
  ctx.reply(Your current ZRFI balance is: ${balance} ZRFI);
};
