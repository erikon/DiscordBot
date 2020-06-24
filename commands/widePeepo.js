module.exports = {
  name: "widepeepo",
  description: "Bryant Language",
  usage: "",
  cooldown: 5,
  async execute(message, args) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play("./assets/audio_file_example.mp3");
      dispatcher.setVolume(0.8);
      dispatcher.on("start", () => {
        console.log("Audio is now playing!");
        message.channel.send({
          files: [
            {
              attachment: "./assets/widepeepo.jpg",
              name: "widepeepo.jpg"
            }
          ]
        });
      });

      dispatcher.on("finish", () => {
        console.log("Audio has finished playing!");
        dispatcher.destroy();
        connection.disconnect();
      });

      // Always remember to handle errors appropriately!
      dispatcher.on("error", err => {
        console.log(err);
        dispatcher.destroy();
        connection.disconnect();
      });
    }
  }
};
