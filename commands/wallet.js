module.exports = async function(ctx) {
  const userId = ctx.from.id;
  const walletAddress = ctx.message.text.split(" ")[1];
  if (!walletAddress) {
    return ctx.reply("Please provide your BEP20 wallet address.\nExample: /wallet 0xYourAddressHere");
  }
  await require("../firebase").collection("users").doc(userId.toString()).set({
    wallet: walletAddress
  }, { merge: true });
  ctx.reply("Wallet address saved successfully!");
};
