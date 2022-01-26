
// let res = await groupBy()
// output.inspect(res)



function groupBy(query, dcnts, bys, sums, maxs) {
    let res3 = {}
    let dcntArr = {}
    for (let record of query) {
        let thisByRecArr = []
        let thisByRecName = ''
        for (let by of bys) {
            let thisByRec = record[by]
            let thisBy = 'null'
            if (thisByRec != null) {
                thisBy = thisByRec
            }
            thisByRecArr.push(thisBy)
            thisByRecName += (thisBy + '-')
        }
        if (!(thisByRecName in res3)) {//NEW ROW
            let newRec2 = {}
            for (let a = 0; a < bys.length; a++) {
                newRec2[bys[a]] = thisByRecArr[a]
            }
            newRec2.cnt = 0
            for (let sum of sums) {
                newRec2[sum + '_sum'] = 0
            }
            for (let max of maxs) {
                newRec2[max + '_max'] = 0
            }
            dcntArr[thisByRecName] = {}
            for (let dcnt of dcnts) {
                newRec2[dcnt + '_dcnt'] = 0
                dcntArr[thisByRecName][dcnt] = new Set()
            }
            res3[thisByRecName] = newRec2
        }

        res3[thisByRecName].cnt += 1
        for (let sum of sums) {
            res3[thisByRecName][sum + '_sum'] += record[sum]
        }
        for (let max of maxs) {
            if (record[max] > res3[thisByRecName][max + '_max'])
                res3[thisByRecName][max + '_max'] = record[max]
        }
        for (let dcnt of dcnts) {
            dcntArr[thisByRecName][dcnt].add(record[dcnt])
            res3[thisByRecName][dcnt + '_dcnt'] = dcntArr[thisByRecName][dcnt].size
        }
    }
    let res4 = []
    for (let [key, value] of Object.entries(res3)) {
        res4.push(value)
    }
    return res4
}




export default groupBy

