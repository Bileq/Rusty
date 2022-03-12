const Message = require('discord.js')
// import { Message } from "discord.js";

export default {
   name: "isPlaying",
   description: "What is currently being played",
   execute(msg: typeof Message) {
      //export variable guildQueue
      // msg.channel.send(`Now playing: ${guildQueue.nowPlaying}`);
      msg.channel.send(`Now playing: song`);
   },
};
