"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require("discord.js");
const bot_1 = require("../bot");
exports.default = {
    name: "stop",
    description: "stop",
    execute(msg) {
        let guildQueue = bot_1.bot.player.getQueue(msg.guild.id);
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`Nothing to stop`);
        }
        else {
            guildQueue.stop();
        }
    },
};
//# sourceMappingURL=stop.js.map