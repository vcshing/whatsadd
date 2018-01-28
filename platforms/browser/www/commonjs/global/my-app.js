// Initialize app
var myApp = new Framework7({
    "modalTitle": "^_^"
    /*preprocess: function (content, url, next) {
      alert(url);
        if (url === 'people.html') {
            var template = Template7.compile(content);
            var resultContent = template({
                title: 'People',
                people: ['John', 'Ivan', 'Mary']
            })

            return resultContent;
       }
       return resultContent;
    }*/
});
//alert(1);

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});



//mainView.router.reloadPage("ranking.html");
//mainView.router.loadPage("ranking.html");
//Load new content as new page
//mainView.router.load({pageName: 'ranking'});

// OR using .load method if need more options

//myApp.preprocess("","","")

// Handle Cordova Device Ready Event

$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    window.open = cordova.InAppBrowser.open;


    // Set AdMobAds options:
    if (/(android)/i.test(navigator.userAgent)) { // for android & amazon-fireos
        admobid = {
            banner: appConfigArr["androidAdmobBannerID"], // or DFP format "/6253334/dfp_example_ad"
            interstitial: appConfigArr["androidAdmobInterstitialID"],
            rewardVideoAd: appConfigArr["androidAdmobBonusID"]
        };
    } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
        admobid = {
            banner: appConfigArr["androidAdmobBannerID"], // or DFP format "/6253334/dfp_example_ad"
            interstitial: appConfigArr["androidAdmobInterstitialID"],
            rewardVideoAd: appConfigArr["androidAdmobBonusID"]
        };
    } else { // for windows phone
        admobid = {
            banner: appConfigArr["androidAdmobBannerID"], // or DFP format "/6253334/dfp_example_ad"
            interstitial: appConfigArr["androidAdmobInterstitialID"],
            rewardVideoAd: appConfigArr["androidAdmobBonusID"]
        };
    }

    if (AdMob) AdMob.createBanner({
        adId: admobid.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        autoShow: true,
        isTesting: appConfigArr["isTesting"]
    });

    if (AdMob) AdMob.prepareRewardVideoAd({
        adId: admobid.rewardVideoAd,
        autoShow: false,
        isTesting: appConfigArr["isTesting"]
    }, function(e) {
        console.log("prepareRewardVideoAdOK" + JSON.stringify(e));
    }, function(e) {
        console.log("prepareRewardVideoAdFail" + JSON.stringify(e));
    });

    if (AdMob) AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: false,
        isTesting: appConfigArr["isTesting"]
    });
    // Request interstitial (will present automatically when autoShowInterstitial is set to true)
    randomEvent(50, function() {
        AdMob.showInterstitial();
    });



    //navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
});

document.addEventListener('onAdPresent', function(e) {
    afterRewardVideo()
    //  location.reload();

        if (AdMob) AdMob.prepareRewardVideoAd({
            adId: admobid.rewardVideoAd,
            autoShow: false,
            isTesting: appConfigArr["isTesting"]
        }, function(e) {
            console.log("prepareRewardVideoAdOK" + JSON.stringify(e));
        }, function(e) {
            console.log("prepareRewardVideoAdFail" + JSON.stringify(e));
        });


});

document.addEventListener('onAdDismiss', function(e) {
    //  location.reload();

        if (AdMob) AdMob.prepareRewardVideoAd({
            adId: admobid.rewardVideoAd,
            autoShow: false,
            isTesting: appConfigArr["isTesting"]
        }, function(e) {
            console.log("prepareRewardVideoAdOK" + JSON.stringify(e));
        }, function(e) {
            console.log("prepareRewardVideoAdFail" + JSON.stringify(e));
        });

});


document.addEventListener('onAdLoaded', function(e) {
    if (e.adType == "rewardvideo") {
        appArr.rewardVideoReady = true;
    }
    console.log("onAdLoaded:" + JSON.stringify(e));
});

document.addEventListener('onAdFailLoad', function(e) {
    if (e.adType == "rewardvideo") {
        appArr.rewardVideoReady = false;
    }
    console.log("onAdFailLoad:" + JSON.stringify(e));
});



document.addEventListener('onAdLeaveApp', function(e) {
    console.log("onAdLeaveApp:" + JSON.stringify(e));
});
// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function(page) {
    // Do something here for "about" page

})
myApp.onPageInit('twelveConstellationsDetail', function(page) {
    // Do something here for "about" page


})
// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function(e) {
    // Get page data from event data
    //alert(1);
    var page = e.detail.page;
    //console.log(page.name);
    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        // app.dialog.alert('1Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="twelveConstellationsDetail"]', function(e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //app.dialog.alert('2Here comes About page');
    //alert(123);

    //$(".twelveConstellationsDetailContents").html(toCode($(".twelveConstellationsDetailContents").html(),1));


})


$$(document).on('pause', function(e) {

})


$$(document).on('resume', function(e) {

})
