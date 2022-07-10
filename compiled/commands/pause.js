"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require("discord.js");
const bot_1 = require("../bot");
exports.default = {
    name: "pause",
    description: "pauses current song",
    execute(msg) {
        let guildQueue = bot_1.bot.player.getQueue(msg.guild.id);
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`There's no song playing`);
        }
        else {
            guildQueue.setPaused(true);
        }
    },
};
//# sourceMappingURL=pause.js.map