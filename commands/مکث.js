const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "مکث",
    description: "برای مکث کردن اهنگ درحال پخش",
    usage: "[مکث]",
    aliases: [],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try{
      serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: بازیکن متوقف شده و صف پاک شده است.: ${error}`, message.channel);
      }	    
      let xd = new MessageEmbed()
      .setDescription("⏸ موزیک برای شما  مکث شد!")
      .setColor("YELLOW")
      .setTitle("اهنگ مکث کرد!")
      .setImage('https://cdn.glitch.global/1aeb3279-ad5b-4159-bd08-aafdd1fd0f22/3005-shut-up.gif?v=1675596058559')
      return message.channel.send(xd);
    }
    return sendError("اهنگی درحال پخش نیست.", message.channel);
  },
};
