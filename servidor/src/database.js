const { Client } = require('pg')
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'companydb',
    password: '25312',
    port: 5432,
}
const client = new Client(connectionData);

client.connect().then(console.log("base de datos conectada"))

export default client;