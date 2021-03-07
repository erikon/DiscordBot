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
        console.log(types);
        console.log(types.length);
    });
    console.log(AllTypes);
    // message.reply((args[0] || "Bryant") + " the type of guy to " + MESSAGES[Math.floor(Math.random() * MESSAGES.length)])
  }
};
