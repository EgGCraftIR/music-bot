const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "حذف",
    description: "حذف اهنک ",
    usage: "<تعداد>",
    aliases: ["حذ"],
  },

  run: async function (client, message, args) {
   const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("صفی وجود ندارد.",message.channel).catch(console.error);
    if (!args.length) return sendError(`استفاده کنید: ${client.config.prefix}\`حذف <تعداد<\``);
    if (isNaN(args[0])) return sendError(`استفاده کنید: ${client.config.prefix}\`حذف <teeade saf>\``);
    if (queue.songs.length == 1) return sendError("صفی نیست.",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return sendError(`صف ${queue.songs.length} اهنگ دارد!`,message.channel).catch(console.error);
try{
    const song = queue.songs.splice(args[0] - 1, 1); 
    sendError(`❌ **|** خذف شد: **\`${song[0].title}\`** از صف.`,queue.textChannel).catch(console.error);
                   message.react("✅")
} catch (error) {
        return sendError(`:notes: خطای غیر منتظره رخ داده است: ${error}`, message.channel);
      }
  },
};
