const Message = require("discord.js");
import { bot } from "../bot";

export default {
  name: "skip",
  description: "Skips currently playing song",
  execute(msg: typeof Message) {
    let guildQueue = bot.player.getQueue(msg.guild.id);
    let queue = guildQueue.songs;

    !guildQueue || guildQueue.isPlaying == false
      ? msg.channel.send(`There's nothing to skip`)
      : 
        guildQueue.skip();
        queue[1] && msg.channel.send(`*Now playing:* \`${queue[1]}\``);
  },
};
