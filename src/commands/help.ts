const Message = require("discord.js");
import { bot } from "../bot";

export default {
    name: "help",
    description: "Shows all commands",
    execute(msg: typeof Message) {
        msg.reply(`List of available commands:
        **\`play\`**: plays a song
        **\`playing\`**: shows currently playing song
        **\`skip\`**: skips a song
        **\`q\`**: shows an entire queue
        **\`loop\`**: loops one song
        **\`qloop\`**: loops an entire queue
        **\`resume\`**: resumes song
        **\`pause\`**: pauses song
        **\`clear\`**: clears queue
        **\`stop\`**: disconnects bot
        `)
                            
    },
};