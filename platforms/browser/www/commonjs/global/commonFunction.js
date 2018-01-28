function noMoneyAlert() {
    myApp.modal({
        title: '你沒有錢鳥._.',
        text: '看廣告可獲得$30000元',
        buttons: [{
                text: '看廣告',
                onClick: function() {
                    if (appArr.rewardVideoReady) {
                        appArr.rewardVideoReady = false;
                        AdMob.showRewardVideoAd();
                    } else {
                        app.dialog.alert("暫時沒有廣告,請稍後再來");
                        if (AdMob) AdMob.prepareRewardVideoAd({
                            adId: admobid.rewardVideoAd,
                            autoShow: false,
                            isTesting: appConfigArr["isTesting"]
                        });
                    }
                }
            },
            {
                text: '取消',
                onClick: function() {

                }
            }
        ]
    })



}

function winAlert(money) {

    /*
      window.plugins.toast.show(
          "你贏了" + money, 'short', 'top',
          function(a) {
              console.log('toast success: ' + a)
          },
          function(b) {
              alert('toast error: ' + b)
          }
      )*/
    app.dialog.alert('你贏了' + money, "恭喜 >O<", function() {
        sliceGameResult()
    });
}

function drewAlert(money) {
    app.dialog.alert('打和', "Super ^_^", function() {
        sliceGameResult()
    });
}

function lostAlert(money) {
    app.dialog.alert('你輸了' + money, "哎 >_<", function() {
        sliceGameResult()
    });
}

function setMoney(money) {
    setCookie("onhandAmt", money)
    onhandAmt = money;
    $(".onhandAmt").html(money)
}

function afterRewardVideo() {
    setCookie("onhandAmt", onhandAmt + 30000)
    onhandAmt = onhandAmt + 30000;
    $(".onhandAmt").html(onhandAmt)
}

function afterCheckIn() {
    setCookie("onhandAmt", onhandAmt + 10000)
    onhandAmt = onhandAmt + 10000;
    $(".onhandAmt").html(onhandAmt)
}

function sliceGameResult() {
    sliceResult = setInterval(
        function() {
            var randNumber = Math.floor((Math.random() * 5));
            var randNumber2 = Math.floor((Math.random() * 5));
            var randNumber3 = Math.floor((Math.random() * 5));
            $(".result1").attr("src", imagePath[randNumber])
            $(".result1").attr("data-imageSign", imageSign[randNumber])
            $(".result2").attr("src", imagePath[randNumber2])
            $(".result2").attr("data-imageSign", imageSign[randNumber2])
            $(".result3").attr("src", imagePath[randNumber3])
            $(".result3").attr("data-imageSign", imageSign[randNumber3])
        }, 30);
}

function renderBidButtomEvent(element, order) {
    if (onhandAmt > 0) {
        var betAmt = parseInt($(element).find(".bet" + order + "Amt").html(), 10);
        if (isNaN(betAmt)) {
            betAmt = 0;
        }
        betAmt += addbetAmt;
        onhandAmt -= addbetAmt
        $(".bet" + order + "AmtSign").html("$")

        $(".bet" + order + "Image").addClass("shake-constant")

        $(".onhandAmt").html(onhandAmt)
        $(".bet" + order + "Amt").html(betAmt)

    } else {
        try {
            window.plugins.toast.show(
                "你沒錢了,先按投注吧", 'short', 'center',
                function(a) {
                    console.log('toast success: ' + a)
                },
                function(b) {
                    alert('toast error: ' + b)
                }
            )
        } catch (e) {

        }

    }

}

function clearGameResult() {
    $(".betAAmtSign").html("")
    $(".betBAmtSign").html("")
    $(".betCAmtSign").html("")
    $(".betDAmtSign").html("")
    $(".betEAmtSign").html("")
    $(".betFAmtSign").html("")
    $(".betAAmt").html("")
    $(".betBAmt").html("")
    $(".betCAmt").html("")
    $(".betDAmt").html("")
    $(".betEAmt").html("")
    $(".betFAmt").html("")
}
