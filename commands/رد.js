const { Util, MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "رد",
    description: "برای رد کردن اهنگ انخاب شده",
    usage: "",
    aliases: ["ر"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel
    if (!channel)return sendError("متاسفم اما برای پخش موسیقی باید در یک کانال صوتی باشید!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("چیزی در حال پخش نیست که بتوانم برای شما از آن بگذرم.", message.channel);
        if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ اهنگ برای شما ادامه داده شد")
      .setColor("YELLOW")
      .setTitle("اهنگ ادامه داده شد")
       
   return message.channel.send(xd).catch(err => console.log(err));
      
    }


       try{
      serverQueue.connection.dispatcher.end()
      } catch (error) {
        serverQueue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: بازیکن متوقف شده و صف پاک شده است.: ${error}`, message.channel);
      }
    message.react("✅")
  },
};
