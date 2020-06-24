// const { simp_test, simp_prod, name_test } = require("../config.json");
const simp_test = process.env.simp_test;
const simp_prod = process.env.simp_prod;
const name_test = process.env.name_test;

module.exports = {
  name: "simp",
  description: "Become a member of the SIMP squad",
  usage: "",
  cooldown: 5,
  execute(message, args) {
    const target_user = message.mentions.members.first();
    let role = simp_prod;
    if (message.channel.guild.name === name_test) {
      role = simp_test;
    }

    if (target_user.roles.cache.get(role)) {
      message.channel.send(
        "Silly Goose, " +
          target_user.user.username +
          " is already a proud member of the SIMP Squad!"
      );
    } else {
      target_user.roles
        .set([role])
        .then(() => {
          message.channel.send(
            "Welcome " + target_user.user.username + " to the SIMP Squad!"
          );
        })
        .catch(err => {
          console.log(err);
          message.channel.send("Sorry something went wrong :slight_frown: ");
        });
    }
  }
};