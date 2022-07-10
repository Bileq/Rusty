const Message = require("discord.js");
import { bot } from "../bot";

export default {
    name: "pause",
    description: "pauses current song",
    execute(msg: typeof Message) {
        let guildQueue = bot.player.getQueue(msg.guild.id);
        
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`There's no song playing`);
        } else {
            guildQueue.setPaused(true)
        }
    },
};
