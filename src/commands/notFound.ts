const Message = require('discord.js')

export default {
   name: "notFound",
   description: "Command not found",
   execute(msg: typeof Message) {
      msg.channel.send("This command doesn't exist");
   },
};
