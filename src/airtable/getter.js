


const getData = async (base, table, formula) => {
    const result = [];
    await base(table)
        .select({
            filterByFormula: formula
        })
        .eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                result.push(record);
            });
            fetchNextPage();
        });
    return result;
}

export default getData;