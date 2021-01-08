const Discord = require("discord.js");

module.exports = {
  name: "northkorea",
  description: "Dictators",
  usage: "",
  cooldown: 5,
  execute(message, args) {
    message.channel.send({
      files: [
        {
          attachment: "./assets/bryant_nk.png",
          name: "bryant_nk.png"
        }
      ]
    });
  }
};
