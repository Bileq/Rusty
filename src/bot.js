require("dotenv").config();

const { Client, Intents } = require("discord.js");
const bot = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const PREFIX = "!";

//commands handling
bot.on("messageCreate", msg => {
   if (msg.author.bot) return;
   if (msg.content.startsWith(PREFIX)) {
      const [command, ...args] = msg.content
        .trim()
        .substring(PREFIX.length)
        // "+" in this regExp concats all spaces
        .split(/\s+/);
      console.log(command);
   }
});


bot.on("ready", () => {
   console.log(`${bot.user.tag} is up`);
});

bot.login(process.env.RUSTY_TOKEN);
