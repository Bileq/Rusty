import { bot } from '../bot'
export default {
    name: "play",
    description: "Play music",
    async execute(message: any, args: any) {
        const voiceChannel = message.member.voice.channel;  
        let guildQueue = bot.player.getQueue(message.guild.id);     

        if (!voiceChannel) {
            return message.channel.send(
                "You need to be in a channel to execute this commands"
            );
        }

        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
            return message.channel.send("You don't have the correct permissions");
        }
        
        if (!args.length) return message.channel.send("Specify the song");
        let queue = bot.player.createQueue(message.guild.id);
        await queue.join(voiceChannel);

        let song = await queue.play(args.join(' ')).catch((_: any) => {
            if(!guildQueue) queue.stop();
        });
    },
};
    