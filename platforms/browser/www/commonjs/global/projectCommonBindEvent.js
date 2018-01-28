$(".otherApp").bind("click", function(e) {
    e.preventDefault();
    var target = "_system";
    var options = "location=yes";
    var url = "https://play.google.com/store/apps/developer?id=Sky+Explorer";
    window.open(url, target, options);
})

$(".shareApp").bind("click", function(e) {
    window.plugins.socialsharing.share(appConfigArr["appName"], appConfigArr["appDescription"], "", appConfigArr["androidAppLink"]);
})

$('.navMenu').on('click', function () {
      myApp.openPanel('left');
});
$('.menuBack').on('click', function () {
     myApp.closePanel();
});

$('.indexpage').on('click', function () {
     mainView.router.load({"pageName":"index"});
     myApp.closePanel();
});

$(".langen").bind("click", function() {
    lang = "en";
    storageManager.setCookie("lang", {
        "selectedLang": lang
    });
    pageInit();
})

$(".langtc").bind("click", function() {
    //  alert(1);
    lang = "zh-tw";
    storageManager.setCookie("lang", {
        "selectedLang": lang
    });
    pageInit();
})

$(".langDefault").bind("click", function() {
    lang = checkLang();
    storageManager.setCookie("lang", {
        "selectedLang": lang
    });
    pageInit();
})


$(".rechargeMoney").bind("click", function() {
    googleInAppGetProduct(function(){
      googleInAppBuyProduct(function(){

      })
    })
})
