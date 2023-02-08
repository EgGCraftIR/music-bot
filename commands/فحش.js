const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "فحش",
    description: "برای دیدن دستورات زد فحش بات",
    usage: "",
    aliases: ["فحش"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let abbas = new MessageEmbed()
    .addField('!addword',"اضافه کردن کلمه به فهرست سیاه")
    .addField('!delword',"حذف کلمه از فهرست سیاه")
    .addField('!ping', "دیدن آمار بات")
    return message.channel.send(abbas);
  },
};