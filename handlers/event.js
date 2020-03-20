const reqClientEvent = (event) => require(`../events/client/${event}`);
const reqGuildEvent = (event) => require(`../events/guild/${event}`);

module.exports = client => {
    // Client Events
    client.on("ready", function() {reqClientEvent("ready") (client)});

    // Guild Events
    client.on("message", async message => reqGuildEvent("message") (client, message));
}