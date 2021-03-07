require("dotenv").config();
const Discord = require("discord.js");

const eric = process.env.ERIC;
const joey = process.env.JOEY;
const francis = process.env.FRANCIS;
const jail = process.env.JAIL;
const afk_bench = process.env.AFK_BENCH;
const name_test = process.env.NAME_TEST;

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
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Vote to Move Joey")
        .setDescription("React to this to message to cast your vote");
      message.channel.send(exampleEmbed).then(new_msg => {
        const filter = (reaction, user) => reaction.emoji.name === "👍";
        const collector = new_msg.createReactionCollector(filter, {
          time: 10000
        });
        let num_votes = -1;
        collector.on("collect", response => {
          console.log(`Collected ${response.emoji.name}`);
          num_votes += 1;
        });
        new_msg.react("👍");
        collector.on("end", collected => {
          console.log(`Collected ${num_votes} votes`);
          const voiceStateCache = message.guild.voiceStates.cache;
          let num_users = voiceStateCache.size;
          console.log(num_users);
          console.log(num_votes);
          if (num_votes >= num_users / 2) {
            if (message.channel.guild.name === name_test) {
              const voice_state = voiceStateCache.get(eric);
              const guild = message.channel.guild;
              const move_to_channel = guild.channels.cache.get(jail);
              voice_state.setChannel(move_to_channel);
              message.channel.send("Test-Eric has been moved.");
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
      });

      message.delete();
    }
  }
};
