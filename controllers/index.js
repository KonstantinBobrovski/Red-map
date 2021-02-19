const { Client } = require('pg');
const fs = require('fs');

 function CreateIndex(request, response) {

    const client = new Client({
        connectionString: process.env.DATABASE_URL || JSON.parse(fs.readFileSync("./LocalSecretConfigs/DBConfings.json")).connection_string,
        ssl: {
            rejectUnauthorized: false
        }
    });

    client.connect()

     client.query('SELECT * FROM plants', (err, res) => {
        if (err) throw err;
         response.render("index.hbs",
             {
                 types: res.rows
             });
        client.end();
    });

   
}

module.exports = {
    CreateIndex
}