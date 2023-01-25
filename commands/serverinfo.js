const { messageEmbed } = require('discord.js');

module.exports = {
  info: {
    name: "serverinfo",
    description: "to get server information",
    usage: "",
    aliases: ["svi"],
  }}

let serverEmbed = new messageEmbed()
  serverEmbed.setColor("")