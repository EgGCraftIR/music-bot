const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "خوش-امد",
    description: "برای دیدن دستورات خوش امد گویی بات",
    usage: "",
    aliases: ["خش"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .addField("برای دیدن کامند های موزیک بات", "!setchannel")
    .addField("برای تنظ","!setbackground")
    .addField("برای دیدن پش زمینه","!background")
    .addField("برای دیدن کانال انتخاب شده", "!channel")
    return message.channel.send(invite);
  },
};
