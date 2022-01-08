// import { bot } from "./bot";
import { Message } from "discord.js";
import { bot } from './bot';
const { Collection } = require('discord.js');
const PREFIX = "!";

//collection of commands
bot.commands = new Collection();

const fs = require("fs");
const commandFiles = fs
   .readdirSync("src/commands/")
   .filter((file: string) => file.endsWith(".ts"));
for (const file of commandFiles) {
   let command = require(`./commands/${file}`);
    if(command.default) command = command.default
   bot.commands.set(command.name, command);
}

//commands handling
module.exports = function (msg: Message) {
   if (msg.author.bot) return;
   if (msg.content.startsWith(PREFIX)) {
      const [command, ...args] = msg.content
         .trim()
         .substring(PREFIX.length)
         .toLowerCase()
         .split(/\s+/);


      switch (command) {
         case "p":
            bot.commands.get("play").execute(msg, args);
            break;
         default:
            bot.commands.get("notFound").execute(msg);
      }
   }
};
