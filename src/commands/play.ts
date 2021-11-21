import { createAudioResource, joinVoiceChannel, createAudioPlayer, PlayerSubscription, AudioPlayerStatus } from "@discordjs/voice";
import ytdl from "ytdl-core";
const ytSearch = require("yt-search");

export default {
    name: "play",
    description: "Play music",
    async execute(message: any, args: any) {
        const voiceChannel = message.member.voice.channel;        
        // const audioPlayer = createAudioPlayer()
        // const resource = createAudioResource('src/lemon.mp3')

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

        const connection = joinVoiceChannel ({
            channelId: voiceChannel.id,
            guildId: message.guild.id,
            adapterCreator: voiceChannel.guild.voiceAdapterCreator
        });
        connection.on('error', console.warn)

        // audioPlayer.play(resource)

        // audioPlayer.on(AudioPlayerStatus.Playing, () => {
        //     console.log("The audio player has started playing")
        // })

        //TODO: check later

        // connection.subscribe
        // const videoFinder = async (query: string) => {
        //     const videoResult = await ytSearch(query);

        //     return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
        // };

        // const video = await videoFinder(args.join(' '));

        // if(video){
        //     const stream  = ytdl(video.url, {filter: 'audioonly'});
        //     connection.on(stream, {seek: 0, volume: 1})
        //     .on('finish', () =>{
        //         voiceChannel.leave();
        //     });
 
        //     await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
        // } else {
        //     message.channel.send('No video results found');
        // }


        console.log("done");
    },
};
