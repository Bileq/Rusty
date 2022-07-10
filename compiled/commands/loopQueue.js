"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require("discord.js");
const bot_1 = require("../bot");
exports.default = {
    name: "qloop",
    description: "loop current queue",
    execute(msg) {
        let guildQueue = bot_1.bot.player.getQueue(msg.guild.id);
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`Nothing to loop`);
        }
        else {
            let repeatModeValue = guildQueue.repeatMode;
            repeatModeValue != 2 ? repeatModeValue = 2 : repeatModeValue = 0;
            guildQueue.setRepeatMode(repeatModeValue);
            msg.channel.send(`Queue loop is: ${repeatModeValue == 2
                ? `on`
                : `off`}`);
        }
    },
};
//# sourceMappingURL=loopQueue.js.map