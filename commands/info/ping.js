const Discord = require('discord.js');

module.exports = {
    name: "ping",
    aliases: ["pong", "latency"],
    category: "{category}",
    description: "{desc}",
    usage: "{usage}",
    run: (client, message, args) => {
        message.channel.send("Pong!");
    }
}