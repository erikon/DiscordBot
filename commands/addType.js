require("dotenv").config();
const Discord = require("discord.js");

const DEV_ROLE_ID = process.env.DEV_ROLE_ID;

const { Types } = require("../common/dbObjects");


module.exports = {
  name: "addtype",
  description: "???",
  usage: "!type [name]",
  cooldown: 5,
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.id === DEV_ROLE_ID)) {
      console.log('You are JuanBotDev');
    } else {
      console.log('You are not JuanBotDev');
    }


    // const addType = Types.create({message: args[0]})
  }
};
