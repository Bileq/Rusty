const Message = require("discord.js");
import { bot } from "../bot";

export default {
    name: "clear",
    description: "Clears queue",
    execute(msg: typeof Message) {
        let guildQueue = bot.player.getQueue(msg.guild.id);
        
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`Nothing to clear`);
        } else {
            guildQueue.clearQueue();
        }
    },
};