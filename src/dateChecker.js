import config from './mySql/config.js'
import connect from './mySql/connect.js'


const connection = await connect(config);