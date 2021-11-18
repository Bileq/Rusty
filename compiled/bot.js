"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const { Client, Intents } = require("discord.js");
const Discord = require("discord.js");
const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const PREFIX = "!";
bot.commands = new Discord.Collection;
//collection of commands
const fs = require('fs');
const commandsFiles = fs.readdirSync('src/commands/')
    .filter((file) => file.endsWith(".ts"));
for (const file of commandsFiles) {
    const commandFile = require(`./commands/${file}`);
    bot.commands.set(commandFile.name, commandFile);
}
//commands handling
bot.on("messageCreate", (msg) => {
    if (msg.author.bot)
        return;
    if (msg.content.startsWith(PREFIX)) {
        const [command, ...args] = msg.content
            .trim()
            .substring(PREFIX.length)
            .toLowerCase()
            .split(/\s+/);
        switch (command) {
            case "play":
                bot.commands.get("play").execute(msg, args);
                break;
            default:
                bot.commands.get("notFound").execute(msg, args);
        }
    }
});
bot.on("ready", () => {
    console.log(`${bot.user.tag} is up`);
});
bot.login(process.env.RUSTY_TOKEN);
