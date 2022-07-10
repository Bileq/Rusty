"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require("discord.js");
const bot_1 = require("../bot");
exports.default = {
    name: "resume",
    description: "resume current song",
    execute(msg) {
        let guildQueue = bot_1.bot.player.getQueue(msg.guild.id);
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`There's no song playing`);
        }
        else {
            guildQueue.setPaused(false);
        }
    },
};
//# sourceMappingURL=resume.js.map