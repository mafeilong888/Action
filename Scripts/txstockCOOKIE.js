//独立COOKIE文件     ck在``里面填写，多账号换行
let userheaderVal= `oA0Gbjljr0VOBYl_dfVs0iybnjB0&_appName=ios&_dev=iPhone9,2&_devId=abf90e3bf55c7c59fc74a6322daccb33175be4a8&_appver=8.7.1&_ifChId=&_isChId=1&_osVer=14.2&openid=oA0Gbjljr0VOBYl_dfVs0iybnjB0&fskey=v0aaf63c22260098ed965a12ff11b450&appid=wxcbc3ab3807acb685&access_token=41_PKcMYTG2BLgHvcmddqZ5nSNKhXJU0eWUGGKNq9_65ens9EPdJFXJD-4S-zh1nQS5FGMup1qC6rsJ14FzHSAxQcdv-qNlrCW8ho6myv17joM&buildType=store&check=11&_idfa=00000000-0000-0000-0000-000000000000&lang=zh_CN`

let userkeyVal= `pgv_pvid=2929545986; ts_last=/activity/page/welwareCenter/; ts_uid=7632901560`

let cashheaderVal= ``

let signheaderVal= `_request_from=web&in_sp_time=0&version_code=13.4.1&js_sdk_version=1.77.0.2&tma_jssdk_version=1.77.0.2&app_name=douyin_lite&app_version=13.4.1&vid=FBE30398-A84F-4A66-843C-4103253BEB28&device_id=39436118956&channel=App%20Store&mcc_mnc=46011&aid=2329&screen_width=1242&openudid=65a904576bf8a4a08e7948222c79758a11e0b780&cdid=7A680DE2-9408-4A4B-ADE2-BFB27E4B993D&os_api=18&ac=4G&os_version=14.2&client_niu_ready=1&device_platform=iphone&build_number=134106&iid=844838366632600&device_type=iPhone9,2&idfa=8633A0A7-AED2-4190-BE18-1DB7874F9BB6&in_sp_time=0`

let signkeyVal= `pgv_pvid=2929545986`

let taskheaderVal= `&_dev=iPhone9,2&_devId=abf90e3bf55c7c59fc74a6322daccb33175be4a8&_appver=8.7.1&_ifChId=&_isChId=1&_osVer=14.2&openid=oA0Gbjljr0VOBYl_dfVs0iybnjB0&fskey=v0aaf63c22260098ed965a12ff11b450&appid=wxcbc3ab3807acb685&access_token=41_PKcMYTG2BLgHvcmddqZ5ncwTWCqpe9AT9rZWm0v4WWPXDIVyVdF5Fu3lovKjRCViTT-DruPun9SQAn5oClWNIHPrUCju3CycQGY1HtS3igw&buildType=store&check=11&_idfa=00000000-0000-0000-0000-000000000000&lang=zh_CN`

let taskkeyVal= `pgv_info=ssid=s6882889354; pgv_pvid=2929545986; ts_last=/activity/page/welwareCenter/; ts_uid=7632901560`

let wxtaskkeyVal= `wzq_channel=3002000031..; pgv_info=ssid=s7428753232; pgv_pvid=3451498616; qlappid=wx9cf8c670ebd68ce4; qlskey=v0958297411600a55a5703ea47580015; qluin=085e9858e9a8d11b9290e1127@wx.tenpay.com; qq_logtype=16; wx_session_time=1611290021000; wzq_qlappid=wx9cf8c670ebd68ce4; wzq_qlskey=v0958297411600a55a5703ea47580015; wzq_qluin=os-ppuKbt2EtVo5V7HgjYFKjPkKk`


let cookieArr = {
  userheaderVal: userheaderVal,
  userkeyVal: userkeyVal,
  cashheaderVal: cashheaderVal,
  signheaderVal: signheaderVal,
  signkeyVal: signkeyVal,
  taskheaderVal: taskheaderVal, 
  taskkeyVal: taskkeyVal,
  wxtaskkeyVal: wxtaskkeyVal, 
}

module.exports =  cookieArr
