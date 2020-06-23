const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("ready!");
});

client.on("message", message => {
  console.log("message: " + message.content);
});

client.login(config.token);
