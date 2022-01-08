import { Message } from "discord.js";

export default {
   name: "notFound",
   description: "Command not found",
   execute(msg: Message) {
      msg.channel.send("This command doesn't exist");
   },
};
