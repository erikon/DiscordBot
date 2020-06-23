module.exports = {
  name: "test",
  description: "Test!",
  cooldown: 5,
  execute(message, args) {
    message.reply("This is just a test!\n" + message.author.displayAvatarURL());
  }
};
