module.exports = {
    name: "brainblast",
    description: "Brain Blast!",
    usage: "",
    cooldown: 5,
    execute(message, args) {
      message.channel.send("Brain Blast!", {
        files: [
          {
            attachment: "./assets/brainblast.jpg",
            name: "brainblast.jpg"
          }
        ]
      });
    }
  };
  