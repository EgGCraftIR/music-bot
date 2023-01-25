const { messageEmbed } = require('discord.js');

module.exports = {
  info: {
    name: "serverinfo",
    description: "to get server information",
    usage: "[serverinfo]",
    aliases: ["svi"],
  }}

client.on("message", message => {
  
let serverEmbed  = new messageEmbed()
  
serverEmbed.setColor('a02e2e');
serverEmbed.setAuthor('coming soon...');
});