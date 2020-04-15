const { readdirSync } = require('fs');

module.exports = client => {
    readdirSync("./commands/").forEach(dir => {

        var commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of commands) {
            delete require.cache[require.resolve(`../commands/${dir}/${file}`)];
            let pull = require(`../commands/${dir}/${file}`);
    
            if (pull.name) {
                client.commands.set(pull.name, pull);
                console.log(`${file} - ✅`)
            } else {
                console.log(`${file} - ❌ -> Module name was not defined or not a String.`);
                continue;
            }
    
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
}