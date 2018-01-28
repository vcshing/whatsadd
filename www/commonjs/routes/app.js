// Dom7
var $$ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
    id: 'io.framework7.testapp',
    root: '#app',
    theme: theme,
    view: {},
    data: function() {
        return {
            "types": ['iPhone 4', 'iPhone 4S'],
            "test": "test"
        }
    },
    methods: {
        helloWorld: function() {
            app.dialog.alert('Hello World!');
        },
    },
    routes: routes,
    vi: {
        placementId: 'pltd4o7ibb9rc653x14',
    },
    on: {
        // each object key means same name event handler
        pageInit: function(page) {
            if (page.route.query.reload == 1) {
                location.reload();
            }
            // do something on page init
            if (page.route.name == "home") {
                if (page.route.query.refresh == 1) {
                    //  alert(1);
                    init()
                }

                lang = getCookie("lang", "selectedLang", "zh-TW");
            }

        },
        popupOpen: function(popup) {
            // do something on popup open
        },
    },
});


$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    window.open = cordova.InAppBrowser.open;
    app.statusbar.hide()

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
    if (typeof(normalAdvAward) != "undefined" && normalAdvAward > 0) {
        addMoney(normalAdvAward)
    } else {
        afterRewardVideo()
    }
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
