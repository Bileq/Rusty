const Message = require('discord.js')
import { bot } from './bot';
const { Collection } = require('discord.js');
const PREFIX = "!";
bot.commands = new Collection();

//collection of commands

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
module.exports = function (msg: any) {
      if (msg.author.bot) return;
      if (msg.content.startsWith(PREFIX)) {
         const [command, ...args] = msg.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
   
         switch (command.toLowerCase()) {
            case 'play':
               bot.commands.get("play").execute(msg, args);
               break;
            case 'playing':
               bot.commands.get("isPlaying").execute(msg, args)
               break;
            case 'skip':
               bot.commands.get("skip").execute(msg, args)
               break;
            default:
               bot.commands.get("notFound").execute(msg);
         }
      }
      
   };


