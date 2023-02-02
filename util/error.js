const { MessageEmbed } = require("discord.js")

/**
 * Easy to send errors because im lazy to do the same things :p
 * @param {String} text - Message which is need to send
 * @param {TextChannel} channel - A Channel to send error
 */
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(text)
    .setFooter("یک مشکلی رخ داده است :(")
    .setImage('https://cdn.glitch.global/1aeb3279-ad5b-4159-bd08-aafdd1fd0f22/5357-babycryy.gif?v=1675365780445')
    await channel.send(embed)
}