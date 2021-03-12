const fs = require("fs");

const createNewChunk = () => {
    // const pathToFile = __dirname + `/../recordings/${Date.now()}.pcm`;
    const pathToFile = __dirname + `/../recordings/test.pcm`;

    return fs.createWriteStream(pathToFile);
};

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

        connection.on('speaking', (user, speaking) => {
          console.log('Connection made')
          if (speaking && user === target_user.user) {
            console.log(`${user.username} started speaking`);
            const audio = connection.receiver.createStream(user, {
              mode: "pcm"
            });

            audio.pipe(createNewChunk());


            audio.on("end", () => {
              message.channel.send("Clip of " + username, {
                files: ["/../recordings/test.pcm"]
              });
              connection.disconnect();
            });
          } else if (speaking) {
            console.log(`${user.username} started speaking`);
          }


        });

      }
    } else {
      message.channel.send("Error: You must be in a voice channel.");
    }
  }
};
