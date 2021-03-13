const fs = require('fs-extra')
const ffmpeg = require('fluent-ffmpeg');

const createNewChunk = () => {
    const pathToFile = __dirname + `/../recordings/${Date.now()}.pcm`;
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
        const outputStream = fs.createWriteStream(__dirname + '/../recordings/test.pcm');
        connection.on('speaking', (user, speaking) => {
          console.log('Connection made');
          if (speaking && user === target_user.user) {
            console.log(`${user.username} started speaking`);

            const readAudioStream = connection.receiver.createStream(user, {
              mode: "pcm"
            });

            // readAudioStream.pipe(createNewChunk());
            readAudioStream.pipe(outputStream, { end: false });

            readAudioStream.on("end", () => {
              console.log(`${user.username} stopped speaking`);
              connection.disconnect();
            });

            readAudioStream.on("error", (err) => {
              console.log(err);
              connection.disconnect();
            });

          } else if (speaking) {
            console.log(`${user.username} started speaking`);
          }
        });

        connection.on('disconnect', () => {
          outputStream.end(() => console.log('Finished.'));

          // fmmpeg -f s16le -ar 48000 -ac 2 -i recordings/test.pcm recordings/out.mp3
          var command = ffmpeg(__dirname + '/../recordings/test.pcm')
            .inputOptions([
              '-f s16le',
              '-ac 2',
              '-ar 48000'
            ])
            .output(__dirname + '/../recordings/final.mp3')
            .on('end', (stdout, stderr) => {
              console.log(stdout);
              message.channel.send("Clip of " + username, {
                files: [__dirname + '/../recordings/final.mp3']
              }).then(() => {
                // Clear Directory when finished
                fs.emptyDirSync(__dirname + '/../recordings/')
              });

            })
            .run();
        });

      }
    } else {
      message.channel.send("Error: You must be in a voice channel.");
    }
  }
};
