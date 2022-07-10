"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const { Client, Intents } = require("discord.js");
require("dotenv/config");
exports.bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
});
try {
    const { Player } = require("discord-music-player");
    const player = new Player(exports.bot);
    exports.bot.player = player;
    exports.bot.player.options.timeout = 1000 * 60 * 10;
    const commandHandler = require("./commandHandler");
    exports.bot.on("messageCreate", commandHandler);
    exports.bot.on("ready", () => {
        console.log(`${exports.bot.user.tag} is up`);
    });
}
catch (_a) {
    console.log("Something went wrong");
}
exports.bot.login(process.env.RUSTY_TOKEN);
//# sourceMappingURL=bot.js.map