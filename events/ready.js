module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  function YousamPower() {
      let hungry = ["!he", "!help" ]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "STREAMING", url: "https://www.twitch.tv/shabake4"});
    }; setInterval(YousamPower, 2000)
}
let count = 0;
setInterval((
            require('node-fetch')(procces.env.URL)
.then(() => cons