require("dotenv").config();
const Discord = require("discord.js");

const { Types } = require("../common/dbObjects");


module.exports = {
  name: "addtype",
  description: "???",
  usage: "!type [name]",
  cooldown: 5,
  execute(message, args) {
    // const addType = Types.create({message: args})
    console.log(args);
  }
};
