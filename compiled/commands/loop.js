"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require("discord.js");
const bot_1 = require("../bot");
exports.default = {
    name: "loop",
    description: "loop current song",
    execute(msg) {
        let guildQueue = bot_1.bot.player.getQueue(msg.guild.id);
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`Nothing to loop`);
        }
        else {
            let repeatModeValue = guildQueue.repeatMode;
            repeatModeValue != 1 ? repeatModeValue = 1 : repeatModeValue = 0;
            guildQueue.setRepeatMode(repeatModeValue);
            msg.channel.send(`Loop is: ${repeatModeValue == 1
                ? `on`
                : `off`}`);
        }
    },
};
//# sourceMappingURL=loop.js.map