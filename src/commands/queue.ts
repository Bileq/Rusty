const Message = require("discord.js");
import { bot } from "../bot";

export default {
    name: "queue",
    description: "Shows current queue",
    execute(msg: typeof Message) {
        let guildQueue = bot.player.getQueue(msg.guild.id);
        
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`Queue is empty`);
        } else {
            let songsString = `Current queue: \n`;
            for (let i = 0; i < guildQueue.songs.length; i++) {
                songsString += `    \`${guildQueue.songs[i]}\`\n`;
            }
            msg.reply(songsString);
        }
    },
};
