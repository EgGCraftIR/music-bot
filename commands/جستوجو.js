const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const ytdlDiscord = require("ytdl-core-discord");
const YouTube = require("youtube-sr");
const sendError = require("../util/error")
const fs = require('fs');

module.exports = {
  info: {
    name: "جستجو",
    description: "برای جستوجوی اهنگ ها",
    usage: "<اهنگ>",
    aliases: ["جس"],
  },

  run: async function (client, message, args) {
    let channel = message.member.voice.channel;
    if (!channel)return sendError("شما باید داخل ویس چنل باشید!", message.channel);

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))return sendError("من دسترسی به جوین به ویس چنل را ندارم!", message.channel);
    if (!permissions.has("SPEAK"))return sendError("من نمیتوانم موزیک پخش کنم!", message.channel);

    var searchString = args.join(" ");
    if (!searchString)return sendError("تو نمی خواستی من می خواهم جستجو کنم", message.channel);

    var serverQueue = message.client.queue.get(message.guild.id);
    try {
           var searched = await YouTube.search(searchString, { limit: 10 });
          if (searched[0] == undefined)return sendError("من نمی توانم اهنگ را پیدا کنم", message.channel);
                    let index = 0;
                    let embedPlay = new MessageEmbed()
                        .setColor("BLUE")
                        .setAuthor(`نتیجه ها برای \"${args.join(" ")}\"`, message.author.displayAvatarURL())
                        .setDescription(`${searched.map(video2 => `**\`${++index}\`  |** [\`${video2.title}\`](${video2.url}) - \`${video2.durationFormatted}\``).join("\n")}`)
                        .setFooter("تعداد عدد ها را برای اضافه کردن به صف انتخاب کنید");
                    // eslint-disable-next-line max-depth
                    message.channel.send(embedPlay).then(m => m.delete({
                        timeout: 15000
                    }))
                    try {
                        var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
                            max: 1,
                            time: 20000,
                            errors: ["time"]
                        });
                    } catch (err) {
                        console.error(err);
                        return message.channel.send({
                            embed: {
                                color: "RED",
                                description: "پس از 20 ثانیه کسی موافق نبود."
                            }
                        });
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await (searched[videoIndex - 1])
		    
                } catch (err) {
                    console.error(err);
                    return message.channel.send({
                        embed: {
                            color: "RED",
                            description: "🆘  **|**  من نتوانستم هیچ نتیجه جستجویی را بدست بیاورم"
                        }
                    });
                }
            
            response.delete();
  var songInfo = video

    const song = {
      id: songInfo.id,
      title: Util.escapeMarkdown(songInfo.title),
      views: String(songInfo.views).padStart(10, ' '),
      ago: songInfo.uploadedAt,
      duration: songInfo.durationFormatted,
      url: `https://www.youtube.com/watch?v=${songInfo.id}`,
      img: songInfo.thumbnail.url,
      req: message.author
    };

    if (serverQueue) {
      serverQueue.songs.push(song);
      let thing = new MessageEmbed()
      .setAuthor("اهنگ به صف اضافه شد", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      .setThumbnail(song.img)
      .setColor("YELLOW")
      .addField("اسم", song.title, true)
      .addField("", song.duration, true)
      .addField("درخواست شده توسط", song.req.tag, true)
      return message.channel.send(thing);
    }

   const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: channel,
      connection: null,
      songs: [],
      volume: 80,
      playing: true,
      loop: false
    };
    message.client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);

    const play = async (song) => {
      const queue = message.client.queue.get(message.guild.id);
      let afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
       if (!afk[message.guild.id]) afk[message.guild.id] = {
        afk: false,
    };
    var online = afk[message.guild.id]
    if (!song){
      if (!online.afk) {
        sendError("خروج از کانال صدا چون فکر می کنم آهنگی در صف وجود ندارد. اگر ربات را دوست دارید 24 ساعته در کانال صوتی اجرا کنید ", message.channel)
        message.guild.me.voice.channel.leave();//If you want your bot stay in vc 24/7 remove this line :D
        message.client.queue.delete(message.guild.id);
      }
            return message.client.queue.delete(message.guild.id);
}
let stream = null; 
    if (song.url.includes("youtube.com")) {
      
      stream = await ytdl(song.url);
stream.on('error', function(er)  {
      if (er) {
        if (queue) {
        queue.songs.shift();
        play(queue.songs[0]);
  	  return sendError(`یک خطای غیرمنتظره رخ داده است \`${er}\``, message.channel)

       }
      }
    });  
}
 
    queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));
      const dispatcher = queue.connection
         .play(ytdl(song.url, {quality: 'highestaudio', highWaterMark: 1 << 25 ,type: "opus"}))
      .on("finish", () => {
           const shiffed = queue.songs.shift();
            if (queue.loop === true) {
                queue.songs.push(shiffed);
            };
          play(queue.songs[0]);
        })

      dispatcher.setVolumeLogarithmic(queue.volume / 100);
      let thing = new MessageEmbed()
      .setAuthor("پخش اهنگ شروع شد!", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
      .setThumbnail(song.img)
      .setColor("BLUE")
      .addField("اسم", song.title, true)
      .addField("در خواست شده توسط", song.req.tag, true)
      queue.textChannel.send(thing);
    };

    try {
      const connection = await channel.join();
      queueConstruct.connection = connection;
      channel.guild.voice.setSelfDeaf(true)
      play(queueConstruct.songs[0]);
    } catch (error) {
      console.error(`من نتوانستم به کانال صوتی بپیوندم: ${error}`);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return sendError(`من نتوانستم به کانال صوتی بپیوندم: ${error}`, message.channel);
    }
 
  },

};
