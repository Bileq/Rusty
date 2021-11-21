const { Client, Intents } = require("discord.js");
import "dotenv/config";

export const bot = new Client({
   intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
});
const { Player } = require("discord-music-player");
const player = new Player(bot)
bot.player = player

const commandHandler = require("./commandHandler");
bot.on("messageCreate", commandHandler);

bot.on("ready", () => {
   console.log(`${bot.user.tag} is up`);
});

bot.login(process.env.RUSTY_TOKEN);
