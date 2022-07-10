"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require("discord.js");
const bot_1 = require("../bot");
exports.default = {
    name: "queue",
    description: "Shows current queue",
    execute(msg) {
        let guildQueue = bot_1.bot.player.getQueue(msg.guild.id);
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`Queue is empty`);
        }
        else {
            let songsString = `Current queue: \n`;
            for (let i = 0; i < guildQueue.songs.length; i++) {
                songsString += `    \`${guildQueue.songs[i]}\`\n`;
            }
            msg.reply(songsString);
        }
    },
};
//# sourceMappingURL=queue.js.map