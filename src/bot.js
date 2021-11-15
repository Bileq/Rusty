require('dotenv').config();

const { Client } = require('discord.js');
const bot = new Client({ intents: ["GUILD_MESSAGES"] });

bot.on('ready', () => {
    console.log(`${bot.user.tag} is up`)
})

bot.login(process.env.RUSTY_TOKEN);