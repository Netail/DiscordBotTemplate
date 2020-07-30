require('dotenv').config();

const { Client, Collection } = require('discord.js');

const client = new Client();

client.commands = new Collection();
client.aliases = new Collection();

require(`./handlers/command`) (client);
require(`./handlers/event`) (client);

client.login(process.env.DISCORD_TOKEN);