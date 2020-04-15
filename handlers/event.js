const reqClientEvent = (event) => require(`../events/client/${event}`);
const reqGuildEvent = (event) => require(`../events/guild/${event}`);

module.exports = client => {
    // Client Events
    client.on("ready", () => {reqClientEvent("ready") (client)});

    // Guild Events
    client.on("message", (message) => reqGuildEvent("message") (client, message));
}