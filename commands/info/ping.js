const Discord = require('discord.js');

module.exports = {
    name: "ping",
    aliases: ["pong"],
    category: "{category}",
    description: "Checks if client responds",
    usage: "{usage}",
    run: (client, message, args) => {
        message.channel.send("Pong!");
    }
}