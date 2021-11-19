"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const { Client, Intents, Collection } = require("discord.js");
require("dotenv/config");
exports.bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
exports.bot.commands = new Collection();
const commandHandler = require("./commandHandler");
exports.bot.on("messageCreate", commandHandler);
exports.bot.on("ready", () => {
    console.log(`${exports.bot.user.tag} is up`);
});
exports.bot.login(process.env.RUSTY_TOKEN);
//# sourceMappingURL=bot.js.map