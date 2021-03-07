require("dotenv").config();
const Discord = require("discord.js");

const DEV_ROLE_ID = process.env.DEV_ROLE_ID;

const { Types } = require("../common/dbObjects");


module.exports = {
  name: "deletetype",
  description: "Delete a Bryant prompt (for JuanBot Devs Only)",
  usage: "!deletetype [type_id]",
  cooldown: 5,
  execute(message, args) {
    if (message.member.roles.cache.some(role => role.id === DEV_ROLE_ID)) {
      Types.destroy({
        where: {
          tid: args[0]
        }
      }).then(num_deleted => {
        console.log(num_deleted + " rows deleted from DB.");
        message.channel.send(num_deleted + " prompts deleted.");
      });
    } else {
      message.reply("You are not worthy of speaking to me.");
    }

  }
};
