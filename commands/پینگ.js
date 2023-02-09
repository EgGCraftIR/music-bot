const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "پینگ",
    description: "برای دیدن امار بات",
    usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
      let xd = new MessageEmbed()
      .setDescription(`**پینگ بات:** ~~${client.ws.ping}~~ | **سرور های درحال مشاهده:** ~~${client.guilds.cache.size}~~`)
      .setTimestamp()
      return message.channel.send(xd);
  },
};
