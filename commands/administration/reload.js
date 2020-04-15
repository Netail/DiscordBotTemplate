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
            console.log(err);
            message.channel.send(`❌ **Failed to reload commands!** (Read Console)`);
            return;
        }

        message.channel.send("✅ **Succesfully reloaded commands!**");
    }
}