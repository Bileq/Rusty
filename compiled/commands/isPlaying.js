"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require('discord.js');
const bot_1 = require("../bot");
exports.default = {
    name: "isPlaying",
    description: "What is currently being played",
    execute(msg) {
        let guildQueue = bot_1.bot.player.getQueue(msg.guild.id);
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send("Nothing is playing");
        }
        else
            msg.channel.send(`*Now playing:* \`${guildQueue.nowPlaying}\``);
    },
};
//# sourceMappingURL=isPlaying.js.map