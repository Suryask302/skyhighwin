
const sql = require("mssql")
const config = {

    user: 'mps_GBTstake_db',
    password: 'mps_GBTstake_db',
    server: '209.208.28.228',
    database: 'mps_GBTstake_db',
    synchronize: true,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }

}

sql.connect(config)
    .then(_ => console.log('connected to sql DB'))
    .catch(e => console.log(e))

const request = new sql.Request();

module.exports = {
    request
}