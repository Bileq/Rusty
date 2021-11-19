const { Client, Intents, Collection } = require("discord.js");
import "dotenv/config";

export const bot = new Client({
   intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
bot.commands = new Collection();

const commandHandler = require("./commandHandler");
bot.on("messageCreate", commandHandler);

bot.on("ready", () => {
   console.log(`${bot.user.tag} is up`);
});

bot.login(process.env.RUSTY_TOKEN);
