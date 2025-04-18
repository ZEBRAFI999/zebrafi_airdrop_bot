const { Telegraf } = require("telegraf");
require("dotenv").config();
const db = require("./firebase");

const tasks = require("./commands/tasks");
const wallet = require("./commands/wallet");
const balance = require("./commands/balance");
const referral = require("./commands/referral");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Welcome to the ZebraFi Airdrop Bot!\nUse /tasks to start earning ZRFI.");
});

bot.command("tasks", (ctx) => tasks(ctx));
bot.command("wallet", (ctx) => wallet(ctx));
bot.command("balance", (ctx) => balance(ctx));
bot.command("referral", (ctx) => referral(ctx));

bot.launch();
console.log("Bot running...");