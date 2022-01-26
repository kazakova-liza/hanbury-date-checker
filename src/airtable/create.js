
const create = async (newData, base, table) => {
    const phaseTable = base(table);
    try {
        await phaseTable.create(newData);
        console.log('Created');
    } catch (err) {
        console.error(
            `Error while creating a record in ${table} with ID ${JSON.stringify(newData)}, error: ${err}`
        );
    }
}

export default create;