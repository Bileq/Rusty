const Message = require("discord.js");
import { RepeatMode } from "discord-music-player";
import { bot } from "../bot";

export default {
    name: "qloop",
    description: "loop current queue",
    execute(msg: typeof Message) {
        let guildQueue = bot.player.getQueue(msg.guild.id);
        
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`Nothing to loop`);
        } else {
            let repeatModeValue = guildQueue.repeatMode

            repeatModeValue != 2 ? repeatModeValue = 2 : repeatModeValue = 0
            guildQueue.setRepeatMode(repeatModeValue);

            console.log(repeatModeValue)

            msg.channel.send(`Queue loop is: ${repeatModeValue == 2 
                ? `on` 
                : `off`
            }`)
        }
    },
};