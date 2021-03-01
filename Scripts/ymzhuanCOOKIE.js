//独立COOKIE文件     ck在``里面填写，多账号换行

let ymzhuanggbodyVal = `sign=53900e2eff206308db01778d4fdb9f05&channelID=2&taskid=1&type=1&uid=11&ver=104
sign=492f17c2b45872e8325f3c13373ab2b6&channelID=2&taskid=1&type=1&uid=10014&ver=104 `
let ymzhuanspbodyVal = `sign=729fa0472cff18a1367ac3f3c5264830&channelID=2&taskid=2&type=2&uid=11&ver=104
sign=9a6fda7ff94add782c1ae5a1d95aa5ba&channelID=2&taskid=2&type=2&uid=10014&ver=104`
let ymzhuantxbodyVal = ``

let ymzhuancookie = {

    ymzhuanggbodyVal: ymzhuanggbodyVal,
    ymzhuanspbodyVal: ymzhuanspbodyVal,
    ymzhuantxbodyVal: ymzhuantxbodyVal,


}

module.exports = ymzhuancookie
