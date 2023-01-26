module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  client.guilds.cache.get("1025711153080434688")
  await client.user.setActivity(`!help `, {
    type: "WATCHING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
