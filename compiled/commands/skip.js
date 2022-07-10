"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require("discord.js");
const bot_1 = require("../bot");
exports.default = {
    name: "skip",
    description: "Skips currently playing song",
    execute(msg) {
        let guildQueue = bot_1.bot.player.getQueue(msg.guild.id);
        let queue = guildQueue.songs;
        !guildQueue || guildQueue.isPlaying == false
            ? msg.channel.send(`There's nothing to skip`)
            :
                guildQueue.skip();
        queue[1] && msg.channel.send(`*Now playing:* \`${queue[1]}\``);
    },
};
//# sourceMappingURL=skip.js.map