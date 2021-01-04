module.exports = {
  name: "imagine",
  description: "It's 2021",
  usage: "",
  cooldown: 5,
  execute(message, args) {
    message.channel.send("Imagine being Bryant Chung in 2021", {
      files: [
        {
          attachment: "./assets/imagine.png",
          name: "imagine.png"
        }
      ]
    });
  }
};
