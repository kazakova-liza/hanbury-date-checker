import mysql from 'mysql';
import util from 'util';

const connect = async (config) => {
    const connection = mysql.createConnection(config);
    let connected = false;
    for (let i = 1; i <= 3 && !connected; i++) {
        try {
            await util.promisify(connection.connect).call(connection);
            connected = true;
        } catch (error) {
            console.log(`Connection attempt ${i} failed`)
            console.log(error);
        }
    }
    if (!connected) {
        throw Error('Connection was not established after 3 attemtps');
    }
    return {
        query(sql, args) {
            return util.promisify(connection.query).call(connection, sql, args);
        },
        close() {
            return util.promisify(connection.end).call(connection);
        },
    };
}


export default connect;