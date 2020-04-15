const Discord = require('discord.js');

module.exports = {
    name: "reload",
    aliases: [],
    category: "{category}",
    description: "Reload all commands",
    usage: "{usage}",
    run: async (client, message, args) => {
        try {
            require(`../../handlers/command.js`) (client);
        }
        catch(err) {
            return message.channel.send(`Failed to reload commands; ${err}`);
        }

        message.channel.send("Commands succesfully reloaded!");
    }
}