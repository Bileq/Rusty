const Message = require("discord.js");
import { bot } from "../bot";

export default {
    name: "stop",
    description: "stop",
    execute(msg: typeof Message) {
        let guildQueue = bot.player.getQueue(msg.guild.id);
        
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`Nothing to stop`);
        } else {
            guildQueue.stop();
        }
    },
};