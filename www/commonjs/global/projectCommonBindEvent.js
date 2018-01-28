
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


$('.navMenu').on('click', function() {
    if(panelIsClose){
      myApp.openPanel('left');
      panelIsClose = false
    }else{
      myApp.closePanel();
      panelIsClose =true
    }
});
$('.menuBack').on('click', function() {
    myApp.closePanel();
    panelIsClose =true
});

$('.indexpage').on('click', function() {
    mainView.router.load({
        "pageName": "index"
    });
    myApp.closePanel();
    panelIsClose =true
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
    googleInAppGetProduct(function(response) {
        googleInAppBuyProduct(function(response) {
          if(response.transactionId != undefined &&
            response.transactionId != ""){
            addMoney(80000);
            app.dialog.alert("你已經成功充值!");
            ajaxSavePaymentRecord(response,function(){})
          }else{
            app.dialog.alert("Cancalled");
          }
        })
    })
})
