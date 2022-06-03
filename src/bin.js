
import config from './mySql/config.js'
import connect from './mySql/connect.js'
import execute from './mySql/execute.js'
import Airtable from "airtable"
import apiKey from "./airtable/key.js"
import getData from './airtable/getter.js'
import create from './airtable/create.js'
import deleteRecord from './airtable/delete.js'

const newBase = new Airtable({ apiKey }).base("appkt63OarXpmUC0C");

const toDelete = await getData(newBase, 'fromTsoHosts', "");
for(let i = 0; i < toDelete.length; i++){
    await deleteRecord(newBase, 'fromTsoHosts', toDelete[3].id )
}

const connection = await connect(config);
console.log("start")
const webQuery = "select * from oood_booking join oood_bookingdates on oood_booking.booking_id = oood_bookingdates.booking_id where approved = 1 and trash = 0 and oood_booking.booking_id > 70 and booking_date >= CURDATE();"
const webRaw = await execute("runQuery", webQuery)
let web = []
for(let i = 0; i < webRaw.length; i++){
    let dd = webRaw[i]
    let rec = {}
    var d1 = new Date(dd.booking_date)
    d1.setHours(d1.getHours() + 2);
    rec.dte = d1
    let aa = dd.form.split('^')
    rec.wedding = aa[2].slice(0, -5)
    await create(rec, newBase, 'fromTsoHosts');

    web.push(rec)
}

console.log("end")
process.exit()



