

const deleteRecord = async (base, table, recordID) => {
    try {
        await base(table).destroy([recordID], function (err, deletedRecords) {
            // if (err) {
            //     console.error(err);
            //     return;
            // }
            console.log('Deleted', deletedRecords.length, 'records');
        });
    }catch(err){console.log(err)}
}

export default deleteRecord;