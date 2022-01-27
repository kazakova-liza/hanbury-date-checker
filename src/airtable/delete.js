

const deleteRecord = async (base, table, recordID) => {
    base(table).destroy([recordID], function (err, deletedRecords) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
    });
}

export default deleteRecord;