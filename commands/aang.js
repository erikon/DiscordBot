module.exports = {
  name: "aaang",
  description: "aaANG!",
  usage: "(Must be in a voice channel)",
  cooldown: 5,
  async execute(message, args) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play("./assets/aaang.mp3");
      dispatcher.setVolume(1);
      dispatcher.on("start", () => {
        console.log("Audio is now playing!");
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
