module.exports = async (client) => {
   var allcmds = ""
               

   function YousamPower() {
      let hungry = [""]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "STREAMING", url: "https://www.twitch.tv/shabake4"});
    }; setInterval(YousamPower, 3000)
}