const { prefix } = require('../../storage/config.json');
const Discord = require('discord.js');

module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === "dm" || !message.content.startsWith(prefix)) return;

    let messageArray = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) command.run(client, message, args);
}