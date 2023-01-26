module.exports = async (client) => {
   function YousamPower() {
      let hungry = ["!help", "!about", "!afk", "!discord", "!invite", "!loop", "!lyrics", "!nowplaying", "!pause", "!remove", "!resume", "!search", "!shuffle", "!skip",]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "STREAMING", url: "https://www.twitch.tv/shabake4"});
    }; setInterval(YousamPower, 3000)
}