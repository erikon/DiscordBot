// const {
//   eric,
//   joey,
//   francis,
//   jail,
//   afk_bench,
//   name_test
// } = require("../config.json");
const eric = process.env.eric;
const joey = process.env.joey;
const francis = process.env.francis;
const jail = process.env.jail;
const afk_bench = process.env.afk_bench;
const name_test = process.env.name_test;

module.exports = {
  name: "joey",
  description:
    "React with 👍 to move an AFK Joey to the AFK Channel (duration 10 seconds)",
  usage: "",
  cooldown: 5,
  execute(message, args) {
    if (message.author.id === francis) {
      message.reply("Sorry, you do not have access to that command.");
    } else {
      const filter = (reaction, user) => reaction.emoji.name === "👍";
      const collector = message.createReactionCollector(filter, {
        time: 10000
      });

      collector.on("collect", response => {
        console.log(`Collected ${response.emoji.name}`);
      });

      collector.on("end", collected => {
        console.log(`Collected ${collected.size} votes`);
        const voiceStateCache = message.guild.voiceStates.cache;
        let num_users = voiceStateCache.size;
        if (collected.size >= num_users / 2) {
          if (message.channel.guild.name === name_test) {
            const voice_state = voiceStateCache.get(eric);
            const guild = message.channel.guild;
            const move_to_channel = guild.channels.cache.get(jail);
            voice_state.setChannel(move_to_channel);
          } else {
            const voice_state = voiceStateCache.get(joey);
            const guild = message.channel.guild;
            const move_to_channel = guild.channels.cache.get(afk_bench);
            voice_state.setChannel(move_to_channel);
            message.channel.send("Joey has been moved.");
          }
        } else {
          message.channel.send("Not enough votes to move Joey.");
        }
      });
    }
  }
};
