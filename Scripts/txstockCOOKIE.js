//独立COOKIE文件     ck在``里面填写，多账号换行
let userheaderVal= `oA0Gbjljr0VOBYl_dfVs0iybnjB0&_appName=ios&_dev=iPhone9,2&_devId=abf90e3bf55c7c59fc74a6322daccb33175be4a8&_appver=8.7.1&_ifChId=&_isChId=1&_osVer=14.2&openid=oA0Gbjljr0VOBYl_dfVs0iybnjB0&fskey=v0aaf63c22260098ed965a12ff11b450&appid=wxcbc3ab3807acb685&access_token=41_PKcMYTG2BLgHvcmddqZ5nSNKhXJU0eWUGGKNq9_65ens9EPdJFXJD-4S-zh1nQS5FGMup1qC6rsJ14FzHSAxQcdv-qNlrCW8ho6myv17joM&buildType=store&check=11&_idfa=00000000-0000-0000-0000-000000000000&lang=zh_CN`

let userkeyVal= `pgv_pvid=2929545986; ts_uid=7632901560`

let cashheaderVal= ``

let signheaderVal= `_request_from=web&in_sp_time=0&version_code=13.4.1&js_sdk_version=1.77.0.2&tma_jssdk_version=1.77.0.2&app_name=douyin_lite&app_version=13.4.1&vid=FBE30398-A84F-4A66-843C-4103253BEB28&device_id=39436118956&channel=App%20Store&mcc_mnc=46011&aid=2329&screen_width=1242&openudid=65a904576bf8a4a08e7948222c79758a11e0b780&cdid=7A680DE2-9408-4A4B-ADE2-BFB27E4B993D&os_api=18&ac=4G&os_version=14.2&client_niu_ready=1&device_platform=iphone&build_number=134106&iid=844838366632600&device_type=iPhone9,2&idfa=8633A0A7-AED2-4190-BE18-1DB7874F9BB6&in_sp_time=0`

let signkeyVal= `{\"Accept-Encoding\":\"gzip, deflate\",\"x-Tt-Token\":\"005e26dd5f97b1888a1256449f2695554e04e16bddf6f5ec61aaa8549fb31f78ee9b35bb524ef410278aa12c76bda93510d33893e4f3592587daa98b7513d7a832f7601191a97b9925afcb3f2d5413743ec76309ea1b2ace945ef27644789537f608d-1.0.1\",\"Host\":\"api5-normal-c-lq.snssdk.com\",\"x-tt-dt\":\"AAAXZ3LVBMD5MECVPONXG5PQRAOMZD6WRSBQQLBBRMIZYIO5NSMZLMMG2XUDGLUG5NWCGARSOWEAQRHZFR5QSNN5AM6HHX5QNMKKO7VBMCT6LWACKEUOF546OD2C6\",\"x-tt-trace-id\":\"00-9bdc263b0992e936bac4a51158bb0023-9bdc263b0992e936-01\",\"passport-sdk-version\":\"5.12.1\",\"X-Khronos\":\"1613227631\",\"Connection\":\"keep-alive\",\"X-SS-Cookie\":\"install_id=2269815014951028; ttreq=1$60b6a0c0bb37e640b006df9f82cc75196ee2c241; sessionid=5e26dd5f97b1888a1256449f2695554e; sessionid_ss=5e26dd5f97b1888a1256449f2695554e; sid_guard=5e26dd5f97b1888a1256449f2695554e%7C1613137715%7C5184000%7CTue%2C+13-Apr-2021+13%3A48%3A35+GMT; sid_tt=5e26dd5f97b1888a1256449f2695554e; uid_tt=7de40d2b417a2768d672e0d06faf1c7d; uid_tt_ss=7de40d2b417a2768d672e0d06faf1c7d; odin_tt=a8d0fd880e061c85a4944df07af5dc1dde97e0deb6d549756d8f8d6f74ed8a2e2af20d406a5d7b7b43210ddc59549d4f2195f4e84c4a76452f8016336e6b0a84; d_ticket=9b1a3c07f0ec6cd9374601d9937d05b7a0599; n_mh=FanDFbDtTIHXCkPURE60NM12r2WhHbvksze5vJiBJD0; passport_csrf_token=be007aacc47c5e0705a70b92fb4ac29f; passport_csrf_token_default=be007aacc47c5e0705a70b92fb4ac29f\",\"X-SS-STUB\":\"D41D8CD98F00B204E9800998ECF8427E\",\"X-Tyhon\":\"sQNmSfVdVWPpCm9b4iJ0c+0aUH77LlY11QBOii0=\",\"User-Agent\":\"NewsLite 8.1.3 rv:8.1.3.05 (iPhone; iOS 14.2; zh_CN) Cronet\",\"Content-Type\":\"application/json; encoding=utf-8\",\"Accept\":\"application/json\",\"sdk-version\":\"2\",\"X-SS-DP\":\"35\",\"tt-request-time\":\"1613227631807\",\"Cookie\":\"passport_csrf_token=be007aacc47c5e0705a70b92fb4ac29f; passport_csrf_token_default=be007aacc47c5e0705a70b92fb4ac29f; d_ticket=9b1a3c07f0ec6cd9374601d9937d05b7a0599; n_mh=FanDFbDtTIHXCkPURE60NM12r2WhHbvksze5vJiBJD0; odin_tt=a8d0fd880e061c85a4944df07af5dc1dde97e0deb6d549756d8f8d6f74ed8a2e2af20d406a5d7b7b43210ddc59549d4f2195f4e84c4a76452f8016336e6b0a84; sessionid=5e26dd5f97b1888a1256449f2695554e; sessionid_ss=5e26dd5f97b1888a1256449f2695554e; sid_guard=5e26dd5f97b1888a1256449f2695554e%7C1613137715%7C5184000%7CTue%2C+13-Apr-2021+13%3A48%3A35+GMT; sid_tt=5e26dd5f97b1888a1256449f2695554e; uid_tt=7de40d2b417a2768d672e0d06faf1c7d; uid_tt_ss=7de40d2b417a2768d672e0d06faf1c7d; install_id=2269815014951028; ttreq=1$60b6a0c0bb37e640b006df9f82cc75196ee2c241\",\"Content-Length\":\"0\",\"X-Gorgon\":\"8404406f0000e54f430e4fc99f877f929709f92d1d8d5a780a4e\"}`

let taskheaderVal= `&_dev=iPhone9,2&_devId=abf90e3bf55c7c59fc74a6322daccb33175be4a8&_appver=8.7.1&_ifChId=&_isChId=1&_osVer=14.2&openid=oA0Gbjljr0VOBYl_dfVs0iybnjB0&fskey=v0aaf63c22260098ed965a12ff11b450&appid=wxcbc3ab3807acb685&access_token=41_PKcMYTG2BLgHvcmddqZ5ncwTWCqpe9AT9rZWm0v4WWPXDIVyVdF5Fu3lovKjRCViTT-DruPun9SQAn5oClWNIHPrUCju3CycQGY1HtS3igw&buildType=store&check=11&_idfa=00000000-0000-0000-0000-000000000000&lang=zh_CN`

let taskkeyVal= `pgv_info=ssid=s6882889354; pgv_pvid=2929545986; ts_uid=7632901560`

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
