const Discord = require("discord.js");
// const { eric, joey, jail, afk_bench, name_test } = require("../config.json");
const eric = process.env.eric;
const joey = process.env.joey;
const jail = process.env.jail;
const afk_bench = process.env.afk_bench;
const name_test = process.env.name_test;

module.exports = {
  name: "joey",
  description: "Moves an AFK Joey to the AFK Bench Voice Channel",
  usage: "",
  cooldown: 5,
  execute(message, args) {
    if (message.channel.guild.name === name_test) {
      const voice_state = message.guild.voiceStates.cache.get(eric);
      const guild = message.channel.guild;
      const move_to_channel = guild.channels.cache.get(jail);
      voice_state.setChannel(move_to_channel);
    } else {
      const voice_state = message.guild.voiceStates.cache.get(joey);
      const guild = message.channel.guild;
      const move_to_channel = guild.channels.cache.get(afk_bench);
      voice_state.setChannel(move_to_channel);
    }
  }
};
