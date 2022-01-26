import Airtable from "airtable";
import apiKey from "../apiKey.js";

const base = new Airtable({ apiKey: apiKey }).base("app8NoNcMIh4UeDkL");

const deleteRecord = async (table, recordID) => {
    base(table).destroy([recordID], function (err, deletedRecords) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
    });
}

export default deleteRecord;