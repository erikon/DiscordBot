const Discord = require("discord.js");

module.exports = {
  name: "idiotboy",
  description: "Unnecessary",
  usage: "",
  cooldown: 5,
  execute(message, args) {
    message.channel.send({
      files: [
        {
          attachment: "./assets/idiotboy.jpg",
          name: "idiotboy.jpg"
        }
      ]
    });
  }
};
