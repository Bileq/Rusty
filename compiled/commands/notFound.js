"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require('discord.js');
exports.default = {
    name: "notFound",
    description: "Command not found",
    execute(msg) {
        msg.channel.send(`This command doesn't exist\nFor more help type: **\`!help\`**`);
    },
};
//# sourceMappingURL=notFound.js.map