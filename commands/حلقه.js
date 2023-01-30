const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "حلقه",
    description: "حلقه موسیقی را تغییر دهید",
    usage: "حلقه",
    aliases: ["حل"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|**  حلقه **\`${serverQueue.loop === true ? "فعال شد" : "غیر فعال شد"}\`**`
                }
            });
        };
    return sendError("هیچ چیزی در این سرور پخش نمی شود.", message.channel);
  },
};
