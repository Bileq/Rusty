module.exports = {
    name: 'notFound',
    description: "Command not found",
    execute(msg, args) {
        msg.channel.send("This commands doesn't exist")
    }
}