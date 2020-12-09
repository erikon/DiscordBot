module.exports = {
  name: "why",
  description: "Tell Me Why",
  usage: "(Must be in a voice channel)",
  cooldown: 5,
  async execute(message, args) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const clipFiles = [
        './assets/heartache.mp3',
        './assets/mistake.mp3',
        './assets/neverwanna1.mp3',
        './assets/thatway1.mp3'
      ];
      var randomFile = clipFiles[Math.floor(Math.random() * clipFiles.length)];
      const dispatcher = connection.play(randomFile);
      dispatcher.setVolume(0.8);
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
