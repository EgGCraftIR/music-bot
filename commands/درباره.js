const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "درباره",
    description: "برای اشنایی با تیم گربه امپراطور",
    usage: "",
    aliases: ["در"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
    let about = new MessageEmbed()
    .setColor("YELLOW")
    .setAuthor('ممنون که از من استفاده میکنید')
    .setFooter('سازنده بات: just_amirHeHe#0485')
    .setDescription('بات پرشین کت یک بات است که توسط just_amirHeHe#0485 بنیانگذاری شده و کاملا فارسی زبان است')
    return message.channel.send(about);
  },
};
