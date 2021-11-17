import { Message } from "discord.js"

export default {
    name: 'notFound',
    description: "Command not found",
    execute(msg: Message, args: any) {
        msg.channel.send("This commands doesn't exist")
    }
}