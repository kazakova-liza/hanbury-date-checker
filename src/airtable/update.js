

const update = async (newData, base, table) => {
    const phaseTable = base(table);
    try {
        await phaseTable.update([newData]);
        console.log('Updated');
    } catch (err) {
        console.error(
            `Error while updating an emptied block record in ${table} with ID ${newData.id}, error: ${err}`
        );
    }
}

export default update;