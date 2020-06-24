const MESSAGES = [
  "think mayo is spicy",
  "go to the dining hall on a first date",
  "think avocados are spicy",
  "order white soondubu",
  "punch someone in a pillow fight",
  "lick his fingers before turning the page on his kindle",
  "think lettuce is spicy",
  "think water is spicy",
  "comment on pornhub",
  "dip his toe in the pool before going in",
  "use his iPad to take pictures",
  "actually read the whole textbook",
  "put ice in his milk",
  "not let little kids win in mario kart",
  "think pancakes are spicy",
  "wear sunglasses at night",
  "wear gym shorts in the winter",
  "smoke oregano and get high",
  "eat advil for the taste",
  "drink melted ice cream"
]

module.exports = {
  name: "type",
  description: "???",
  usage: "!type [name]",
  cooldown: 5,
  execute(message, args) {
    message.reply((args[0] || "Bryant") + " the type of guy to " + MESSAGES[Math.floor(Math.random() * MESSAGES.length)])
  }
};
