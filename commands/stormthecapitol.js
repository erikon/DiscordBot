const Discord = require("discord.js");

module.exports = {
  name: "stormthecapitol",
  description: "Bryant is MAGA",
  usage: "",
  cooldown: 5,
  execute(message, args) {
    message.channel.send({
      files: [
        {
          attachment: "./assets/stormthecapitol.png",
          name: "stormthecapitol.png"
        }
      ]
    });
  }
};
