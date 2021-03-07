require("dotenv").config();
const Discord = require("discord.js");

const DEV_ROLE_ID = process.env.DEV_ROLE_ID;

const { Types } = require("../common/dbObjects");


module.exports = {
  name: "addtype",
  description: "Add a new Bryant prompt (For JuanBot Devs Only)",
  usage: "!addtype [prompt]",
  cooldown: 5,
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.id === DEV_ROLE_ID)) {
      const addType = Types.create({message: args.join(' ')}).then(type => {
        message.channel.send(message.author.toString() + " has added the following type prompt: '" + type.message + "'");
      });

    } else {
      message.reply("You are not worthy of speaking to me.");
    }

  }
};
