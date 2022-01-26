
// let res = await groupBy()
// output.inspect(res)

function xtab(forXtab) {
    let cols = {}
    let rows = {}
    forXtab.map((ip) => {
        if (!(ip.col in cols)) { cols[ip.col] = 0 }
        if (!(ip.row in rows)) { rows[ip.row] = {} }
    })

    Object.keys(rows).forEach(key => {
        rows[key] = { ...cols }
        rows[key].category = key
    })
    forXtab.map((ip) => {
        rows[ip.row][ip.col] += ip.val
    })
    rows = Object.values(rows)
    rows.sort((a, b) => a.category.localeCompare(b.category))
    return rows
}



export default xtab

