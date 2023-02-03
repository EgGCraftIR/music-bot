const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "دسته",
    description: "برای دیدن دسته بندی قابلیت های بات",
    usage: "",
    aliases: ["دس"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle('دسته بندی قابلیت ها')
    .addField("برای دیدن کامند های موزیک بات", "!کمک")
    .addField("برای دیدن دستورات تیکت","!help")
    .addField("فحش!","برای دیدن دستورات زد فحش بات")
    return message.channel.send(invite);
  },
};
