const Discord = require("discord.js");

module.exports = {
  name: "china",
  description: "Communism",
  usage: "",
  cooldown: 5,
  execute(message, args) {
    message.channel.send({
      files: [
        {
          attachment: "./assets/bryant_china.png",
          name: "bryant_china.png"
        }
      ]
    });
  }
};
