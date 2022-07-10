const Message = require("discord.js");
import { RepeatMode } from "discord-music-player";
import { bot } from "../bot";

export default {
    name: "loop",
    description: "loop current song",
    execute(msg: typeof Message) {
        let guildQueue = bot.player.getQueue(msg.guild.id);
        
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`Nothing to loop`);
        } else {
            let repeatModeValue = guildQueue.repeatMode

            repeatModeValue != 1 ? repeatModeValue = 1 : repeatModeValue = 0
            guildQueue.setRepeatMode(repeatModeValue);

            msg.channel.send(`Loop is: ${repeatModeValue == 1 
                ? `on` 
                : `off`
            }`)
        }
    },
};