const Message = require('discord.js')
import { bot } from '../bot'

export default {
   name: "isPlaying",
   description: "What is currently being played", 
   execute(msg: typeof Message) {
         let guildQueue = bot.player.getQueue(msg.guild.id);
         if(!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send("Nothing is playing")
         } else msg.channel.send(`*Now playing:* \`${guildQueue.nowPlaying}\``);  
         
      },
};
