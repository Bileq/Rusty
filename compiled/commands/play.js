"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const voice_1 = require("@discordjs/voice");
const ytSearch = require("yt-search");
exports.default = {
    name: "play",
    description: "Play music",
    execute(message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const voiceChannel = message.member.voice.channel;
            // const audioPlayer = createAudioPlayer()
            // const resource = createAudioResource('src/lemon.mp3')
            if (!voiceChannel) {
                return message.channel.send("You need to be in a channel to execute this commands");
            }
            const permissions = voiceChannel.permissionsFor(message.client.user);
            if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
                return message.channel.send("You don't have the correct permissions");
            }
            if (!args.length)
                return message.channel.send("Specify the song");
            const connection = (0, voice_1.joinVoiceChannel)({
                channelId: voiceChannel.id,
                guildId: message.guild.id,
                adapterCreator: voiceChannel.guild.voiceAdapterCreator
            });
            connection.on('error', console.warn);
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
        });
    },
};
//# sourceMappingURL=play.js.map