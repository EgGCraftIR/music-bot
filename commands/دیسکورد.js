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
    
   message.channel.send('https://discord.gg/X4gEWUdZ https://cdn.glitch.global/1aeb3279-ad5b-4159-bd08-aafdd1fd0f22/8497-drake.png?v=1675365959830')
  },
};
