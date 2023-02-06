const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "دیسکورد",
    description: "برای دریافت لینک دیسکورد",
    usage: "",
    aliases: ["د"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 0;
    
   message.channel.send('https://discord.gg/aGBbYvesaT')
  },
};
