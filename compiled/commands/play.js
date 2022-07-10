"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("../bot");
exports.default = {
    name: "play",
    description: "Play music",
    execute(message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const voiceChannel = message.member.voice.channel;
            let guildQueue = bot_1.bot.player.getQueue(message.guild.id);
            if (!voiceChannel) {
                return message.channel.send("You need to be in a channel to execute this commands");
            }
            const permissions = voiceChannel.permissionsFor(message.client.user);
            if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
                return message.channel.send("You don't have the correct permissions");
            }
            if (!args.length)
                return message.channel.send("Specify the song");
            let queue = bot_1.bot.player.createQueue(message.guild.id);
            yield queue.join(voiceChannel);
            let song = yield queue.play(args.join(' ')).catch((_) => {
                if (!guildQueue)
                    queue.stop();
            });
            return guildQueue;
        });
    },
};
//# sourceMappingURL=play.js.map