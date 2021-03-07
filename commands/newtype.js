require("dotenv").config();
const Discord = require("discord.js");

const { Types } = require("../common/dbObjects");


module.exports = {
  name: "newtype",
  description: "???",
  usage: "!type [name]",
  cooldown: 5,
  execute(message, args) {
    const AllTypes = Types.findAll().then(types => {
        const typeLen = types.length;
        message.reply("Bryant the type of guy to " + types[Math.floor(Math.random() * typeLen)])
    });
  }
};
