"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'notFound',
    description: "Command not found",
    execute(msg, args) {
        msg.channel.send("This commands doesn't exist");
    }
};
//# sourceMappingURL=notFound.js.map