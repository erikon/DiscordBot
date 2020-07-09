module.exports = {
  name: "suckit",
  description: "Suq my diq",
  usage: "",
  execute(message, args) {
    message.channel.send("Suq my diq Robert!", {
      files: [
        {
          attachment: "./assets/robface.png",
          name: "robface.jpg"
        }
      ]
    });
  }
};
