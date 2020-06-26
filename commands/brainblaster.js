const Discord = require("discord.js");
const Canvas = require("canvas");

module.exports = {
  name: "brainblaster",
  description: "Time to BLAST",
  async execute(message, args) {
    const user = message.author;
    const target_user = message.mentions.members.first().user;

    const canvas = Canvas.createCanvas(550, 250);
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage("./assets/black-background.jpg");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#74037b";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(
      target_user.displayAvatarURL({ format: "jpg" })
    );
    // const watergun = await Canvas.loadImage("./assets/watergun2.png");
    const brainblast = await Canvas.loadImage("./assets/Blast2.png");

    ctx.drawImage(avatar, 25, 25, 200, 200);
    ctx.drawImage(brainblast, 250, 25, 200, 200);
    // ctx.drawImage(watergun, 250, 25, 200, 200);
    // ctx.drawImage(brainblast, 475, 25, 200, 200);

    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "brainblaster.png"
    );

    message.channel.send(attachment);
  }
};
