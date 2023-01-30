const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "سازنده",
    description: "برای شناخت سازنده بات",
    usage: "",
    aliases: ["ساز"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let dev = new MessageEmbed()
    .setColor("YELLOW")
    .setAuthor("just_amirHeHe#0485")
    .setDescription("اشکالات بات را در دی ام من گزارش بدید")
    return message.channel.send(dev);
  },
};
