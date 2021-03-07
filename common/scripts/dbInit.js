require("dotenv").config();
const Sequelize = require('sequelize');

const DB_URL = process.env.DATABASE_URL;

const options = process.env.ENV == 'production' ? {
  dialect: 'postgres',
  protocol: "postgres",
  dialectOptions: {
      ssl: {
          require: process.env.USE_SSL,
          rejectUnauthorized: false
      }
  }
} : {dialect: 'postgres'}

const sequelize = new Sequelize(DB_URL, options);

const User = require('../models/users')(sequelize, Sequelize.DataTypes);
const BryantType = require('../models/types')(sequelize, Sequelize.DataTypes);

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
  "drink melted ice cream",
  "prankcall his own parents",
  "apologize when someone bumps into him",
  "hold the door open for someone even though they're across the room",
  "actually try putting his dick in a box",
  "be competitive about urine color",
  "put a cucumber in his pants and call it his dick",
  "only eat red m&ms and yellow skittles",
  "go to hmart and break all the pepero sticks",
  "try sticking his dick through a donut",
  "piss on the seat",
  "sneeze and bless himself",
  "wipe and then smell",
  "eat at weeny hut juniors",
  "go to PTA meetings as a student",
  "rip ass in a full elevator",
  "take the elevator from the first to second floor",
  "scratch his head over his food for seasoning",
  "eat the message inside a fortune cookie",
  "face the back of the toilet while shitting",
  "kick a little kid off the swing set",
  "score an own goal and scream \"LET'S GOOO\"",
  "eat cheetos out of a bucket",
  "cut the line at a drive through",
  "slide into a girl's DMs on LinkedIn",
  "shit in a urinal",
  "get his pick up lines from Quora",
  "buy sex toys on his mom's Amazon account",
  "use Bing!™",
  "bring his cousin to prom",
  "ask about the hot coworkers on a job interview",
  "get a custom dildo mold of his penis",
  "dive into a kiddie pool",
  "hit reply all to the department-wide email",
  "join a cult and get disappointed there's no kool aid",
  "go to AA meetings for the free coffee and donuts",
  "deepthroat an ice pop",
  "roll up his pizza like a burrito",
  "tip toe a little when getting his height measured",
  "eat an unmicrowaved hot pocket",
  "eat glue as a dairy alternative",
  "cheat on a personality test",
  "go to Chuck E' Cheese for the milfs",
  "steal all the free samples at Costco",
  "pop a little kid's balloon",
  "eat a deodorant stick",
  "write a Wikipedia page about his penis",
  "use a bidet as a water fountain",
  "get his penis stuck in the subway doors",
  "go for the fritos first",
  "drink the dressing then eat the lettuce",
  "pay for Brazzers",
  "get competitive about blood types",
  "start an OnlyFans and lose money",
  "clean his glasses by licking them",
  "say \"POGGERS\" after he nuts",
  "keeps detailed notes about his fap sessions",
  "put extra virgin olive oil in his car",
  "wash his water before drinking it",
  "get his picture taken with Santa",
  "put a booty call on his Google calendar",
  "bring popcorn to a funeral",
  "steal a little kid's bike",
  "touch the art in a museum",
  "mix melted ice cream flavors and refreeze it",
  "lick oyster shells for the flavor",
  "super glue his diploma to the wall",
  "lick the salt off crackers",
  "sleep with a night light",
  "be afraid to look under his bed",
  "own a Snuggie",
  "wet a paper towel and put it on his face as a mask",
  "go camping in his neighbor's yard",
  "give a homeless man a penny and feel good about it",
  "drink flu shots",
  "speak Spanish in Brazil",
  "only eat McDonalds while traveling",
  "write in library books",
  "vandalize a church",
  "pocket all the money from the offering basket",
  "get drunk off communion wine"
]

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
	const users = [
		User.upsert({ test: 'User 1'}),
    User.upsert({ test: 'User 2'}),
	];
	await Promise.all(users);

  const types = MESSAGES.map(m => {
    return BryantType.upsert({message: m})
  })
  await Promise.all(types);

	console.log('Database synced');
	sequelize.close();
}).catch(console.error);
