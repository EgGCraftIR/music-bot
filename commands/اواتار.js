const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "اواتار",
    description: "برای دیدن اواتار خود",
    usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
      let xd = new MessageEmbed()
      .setAuthor(`اواتار ${message.author.tag}`)
      .setImage(message.user.displayAvatarURL())
      return message.channel.send(xd);
  },
};
