module.exports = {
  name: "future",
  description: "Time for the Future",
  usage: "(Must be in a voice channel)",
  cooldown: 5,
  async execute(message, args) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play("./assets/future.mp3");
      dispatcher.setVolume(2);
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
