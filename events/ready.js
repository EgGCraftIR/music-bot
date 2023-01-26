module.exports = async (client) => {
   function YousamPower() {
      let hungry = ["!","!" , "!h", "!h", "!he", "!he", "!hel", "!hel", "!help", "!help" ]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "STREAMING", url: "https://www.twitch.tv/shabake4"});
    }; setInterval(YousamPower, 10000)
}