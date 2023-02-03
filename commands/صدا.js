const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "صدا",
    description: "برای کنترل کردن صدای موزیک",
    usage: "[صدا]",
    aliases: ["ص", "صد"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel)return sendError("شما باید داخل ویس چنل باشید", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("کسی داخل این ویس چنل نیست.", message.channel);
    if (!args[0])return message.channel.send(`صدای خودکار این است: **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send(':notes: Numbers only!').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return sendError('You can\'t set the volume more than 150. or lower than 0',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new MessageEmbed()
    .setDescription(`صدا تنظیم شد بر روی: **${args[0]/1}/100**`)
    .setAuthor("تنظیم کننده صدا", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
    .setColor("BLUE")
    .setImage('https://cdn.glitch.global/1aeb3279-ad5b-4159-bd08-aafdd1fd0f22/9003-bananadance.gif?v=1675460631547')
    return message.channel.send(xd);
  },
};
