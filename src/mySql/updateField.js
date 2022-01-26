import connect from './connect.js'

const updateField = async (tableName, keyFieldName, updatingFieldName, items) => {

    const db = connect();

    const sqlQueryPattern = `UPDATE TABLE_NAME_PLACEHOLDER SET UPD_FIELD_PLACEHOLDER = ? WHERE KEY_FIELD_PLACEHOLDER = ?;`

    const query = sqlQueryPattern
        .replace('TABLE_NAME_PLACEHOLDER', tableName)
        .replace('UPD_FIELD_PLACEHOLDER', updatingFieldName)
        .replace('KEY_FIELD_PLACEHOLDER', keyFieldName);
    console.log(query);

    for (const item of items) {
        await db.query(query, [item[updatingFieldName], item[keyFieldName]]);

        // console.log(`Updated rows with [${keyFieldName}]=${item[keyFieldName]}. Field '${updatingFieldName}' was set to ${item[updatingFieldName]}`)
    }

    console.log(`Finished updating table ${tableName}`);
}

export default updateField;