module.exports = {
  name: "imagine",
  description: "It's 2020",
  usage: "",
  cooldown: 5,
  execute(message, args) {
    message.channel.send({
      files: [
        {
          attachment: "./assets/imagine.png",
          name: "Imagine being Bryant Chung in 2020.png"
        }
      ]
    });
  }
};
