const fs = require("fs");
var FileWriter = require("wav").FileWriter;

module.exports = {
  name: "listen",
  description: "Juan Is Always Watching :wink:",
  usage: "mention another user to stalk them!",
  cooldown: 5,
  async execute(message, args) {
    if (message.member.voice.channel) {
      const target_user = message.mentions.members.first();
      if (!target_user) {
        message.channel.send("Error: Please mention a user.");
      } else {
        const username = target_user.user.username;
        const connection = await message.member.voice.channel.join();

        connection.on("disconnect", () => {
          fs.unlink("./" + username + "voice.wav", err => {
            if (err) throw err;
            console.log("Recording was deleted");
          });
        });
        const audio = connection.receiver.createStream(target_user, {
          mode: "pcm"
        });
        let writeStream = new FileWriter("./" + username + "_voice.wav", {
          sampleRate: 48000,
          channels: 2
        });
        audio.pipe(writeStream);
        audio.resume();

        audio.on("end", () => {
          message.channel
            .send("Clip of " + username, {
              files: ["./" + username + "voice.wav"]
            })
            .then(() => {
              connection.disconnect();
            });
        });
      }
    } else {
      message.channel.send("Error: You must be in a voice channel.");
    }
  }
};
