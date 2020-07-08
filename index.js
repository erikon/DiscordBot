const fs = require("fs");
// const { prefix, token, juan, donge, joey } = require("./config.json");
const prefix = process.env.prefix;
const token = process.env.token;
const juan = process.env.juan;
const donge = process.env.donge;
const joey = process.env.joey;

const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("ready!");
});

client.on("message", message => {
  if (message.mentions.users.get(juan)) {
    message.channel.send("You are undesirable puny human!");
  }
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});

client.on("voiceStateUpdate", async (oldState, newState) => {
  if (oldState.id === donge && newState.id === donge) {
    if (!oldState.channelID && newState.channelID) {
      const connection = await client.channels.cache
        .get(newState.channelID)
        .join();
      const dispatcher = connection.play("./assets/donger-sigh.mp3");
      dispatcher.setVolume(0.8);
      dispatcher.on("start", () => {
        console.log("Audio is now playing!");
      });

      dispatcher.on("finish", () => {
        console.log("Audio has finished playing!");
        dispatcher.destroy();
        connection.disconnect();
      });

      // Always remember to handle errors appropriately!
      dispatcher.on("error", err => {
        console.log(err);
        dispatcher.destroy();
        connection.disconnect();
      });
    }
  } else if (oldState.id === joey && newState.id === joey) {
    if (!oldState.channelID && newState.channelID) {
      const connection = await client.channels.cache
        .get(newState.channelID)
        .join();
      const dispatcher = connection.play("./assets/joey_kidding.mp3");
      dispatcher.setVolume(0.8);
      dispatcher.on("start", () => {
        console.log("Audio is now playing!");
      });

      dispatcher.on("finish", () => {
        console.log("Audio has finished playing!");
        dispatcher.destroy();
        connection.disconnect();
      });

      // Always remember to handle errors appropriately!
      dispatcher.on("error", err => {
        console.log(err);
        dispatcher.destroy();
        connection.disconnect();
      });
    }
  }
});

client.login(token);
