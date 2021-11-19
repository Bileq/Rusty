"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("./bot");
const PREFIX = "!";
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
            .toLowerCase()
            .split(/\s+/);
        switch (command) {
            case "play":
                bot_1.bot.commands.get("play").execute(msg, args);
                break;
            default:
                bot_1.bot.commands.get("notFound").execute(msg, args);
        }
    }
};
//# sourceMappingURL=commandHandler.js.map