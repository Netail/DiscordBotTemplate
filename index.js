const { token } = require('./storage/config.json');
const { Client, Collection } = require('discord.js');

const client = new Client();

client.commands = new Collection();
client.aliases = new Collection();

require(`./handlers/command`) (client);

require(`./handlers/event`) (client);

client.login(token);