"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require('discord.js');
const bot_1 = require("./bot");
const { Collection } = require('discord.js');
const PREFIX = "!";
bot_1.bot.commands = new Collection();
//collection of commands
const fs = require("fs");
const commandFiles = fs
    .readdirSync("src/commands/")
    .filter((file) => file.endsWith(".ts"));
for (const file of commandFiles) {
    let command = require(`./commands/${file}`);
    if (command.default)
        command = command.default;
    bot_1.bot.commands.set(command.name, command);
}
//commands handling
module.exports = function (msg) {
    if (msg.author.bot)
        return;
    if (msg.content.startsWith(PREFIX)) {
        const [command, ...args] = msg.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
        switch (command.toLowerCase()) {
            case 'play':
                bot_1.bot.commands.get("play").execute(msg, args);
                break;
            case 'playing':
                bot_1.bot.commands.get("isPlaying").execute(msg, args);
                break;
            case 'skip':
                bot_1.bot.commands.get("skip").execute(msg, args);
                break;
            case 'q':
                bot_1.bot.commands.get("queue").execute(msg, args);
                break;
            case 'pause':
                bot_1.bot.commands.get("pause").execute(msg, args);
                break;
            case 'resume':
                bot_1.bot.commands.get("resume").execute(msg, args);
                break;
            case 'clear':
                bot_1.bot.commands.get("clear").execute(msg, args);
                break;
            case 'stop':
                bot_1.bot.commands.get("stop").execute(msg, args);
                break;
            /*
         case 'help':
            bot.commands.get('help').execute()
            break;
            */
            default:
                bot_1.bot.commands.get("notFound").execute(msg);
        }
    }
};
//# sourceMappingURL=commandHandler.js.map