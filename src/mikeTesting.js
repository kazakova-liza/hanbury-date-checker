import getStageSnapshot from './stageSnapshot.js'
import getChecker1 from '../src/checker1.js'
import email2Json from '../src/email2Json.js'
import weeklyReport from '../src/weeklyReport.js'


//const result = await getStageSnapshot();

//const result = await getChecker1();
const result = await weeklyReport();


// let aa = {}
// aa.query = {"to":"mike@willhey.co.uk", "subject":"hij", "htmlContent":'abcdef"ffff"'}
// const result = await email2Json(aa);
// console.log()