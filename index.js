const { client, config, databaseSync } = require("./lib/");


const start = async () => {
    try {
        await databaseSync(config.DATABASE);
        const Client = new client();
        Client.log("starting client...");
        await Client.startServer();
        await Client.WriteSession();
        await Client.WaConnect();
    } catch (error) {
        console.error(error);
    }
};

start();
