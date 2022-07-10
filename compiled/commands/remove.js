"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require("discord.js");
const bot_1 = require("../bot");
exports.default = {
    name: "remove",
    description: "removes specified songs from the queue",
    execute(msg, args) {
        let guildQueue = bot_1.bot.player.getQueue(msg.guild.id);
        if (!guildQueue || guildQueue.isPlaying == false) {
            msg.channel.send(`Nothing to remove`);
        }
        else {
            guildQueue.remove(parseInt(args[0]));
            ;
        }
    },
};
//# sourceMappingURL=remove.js.map