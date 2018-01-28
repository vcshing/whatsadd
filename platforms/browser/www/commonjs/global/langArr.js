var lang
var appConfigArr = []
var appVarArr = []
var defaultLangArr = []
var admobid = {};
var menuArr= []
var menuSiteArr= []
var loopLangArr = []
var imageSign = []
var imagePath = []
var onhandAmt = 0;
var sliceResult;
var addbetAmt = 50;

appConfigArr={
  "appName" :	"Fish Shrimp Crab",
  "appDescription"	:	"Fish Shrimp Crab",
  "androidAppLink"	:"https://play.google.com/store/apps/details?id=com.skyexplorer.fishshrimpcrab",
  "androidAdmobBannerID"	:"ca-app-pub-3715336230214756/2688306979",
  "androidAdmobInterstitialID"	:"ca-app-pub-3715336230214756/2468815124",
  "androidAdmobBonusID"	:"ca-app-pub-3715336230214756/1817012772",
  "isTesting" : false
}
appArr={
  "rewardVideoReady": true,
}


imageSign.push("A")
imageSign.push("B")
imageSign.push("C")
imageSign.push("D")
imageSign.push("E")
imageSign.push("F")
imagePath.push("./image/fish.png")
imagePath.push("./image/shrimp.png")
imagePath.push("./image/crab.png")
imagePath.push("./image/money.png")
imagePath.push("./image/wo.png")
imagePath.push("./image/chicken.png")


defaultLangArr.push("Other Apps");
defaultLangArr.push("Share Apps");
defaultLangArr.push("Default Language");
defaultLangArr.push("計算");

defaultLangArr.push("產品A");
defaultLangArr.push("產品B");
defaultLangArr.push("金額");
defaultLangArr.push("金額");
defaultLangArr.push("金額");
defaultLangArr.push("數量");
defaultLangArr.push("數量");
defaultLangArr.push("數量");
defaultLangArr.push("每件重量");
defaultLangArr.push("每件重量");
defaultLangArr.push("每件重量");
defaultLangArr.push("建議");
defaultLangArr.push("最便宜");

defaultLangArr.push("產品A");
defaultLangArr.push("每一元");
defaultLangArr.push("每一單位");

defaultLangArr.push("產品B");
defaultLangArr.push("每一元");
defaultLangArr.push("每一單位");

menuSiteArr.push("http://www.metro.taipei/");
menuSiteArr.push("https://www.krtco.com.tw/");
menuSiteArr.push("https://www.tymetro.com.tw");
menuSiteArr.push("http://www.thsrc.com.tw");
menuSiteArr.push("http://www.railway.gov.tw/tw/");
