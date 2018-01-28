/***set betAmt**/
$(".betAmt50").bind("click", function() {
    addbetAmt = 50;
    $(".betAmt50").addClass("button-fill");
    $(".betAmt100").removeClass("button-fill");
    $(".betAmt500").removeClass("button-fill");
    $(".betAmt1000").removeClass("button-fill");
})
$(".betAmt100").bind("click", function() {
    addbetAmt = 100;
    $(".betAmt100").addClass("button-fill");
    $(".betAmt50").removeClass("button-fill");
    $(".betAmt500").removeClass("button-fill");
    $(".betAmt1000").removeClass("button-fill");
})
$(".betAmt500").bind("click", function() {
    addbetAmt = 500;
    $(".betAmt500").addClass("button-fill");
    $(".betAmt50").removeClass("button-fill");
    $(".betAmt100").removeClass("button-fill");
    $(".betAmt1000").removeClass("button-fill");
})
$(".betAmt1000").bind("click", function() {
    addbetAmt = 1000;
    $(".betAmt1000").addClass("button-fill");
    $(".betAmt50").removeClass("button-fill");
    $(".betAmt100").removeClass("button-fill");
    $(".betAmt500").removeClass("button-fill");
})

$(".betA").bind("click", function() {
  $(".bet" + "F" + "Image").removeClass("shake-constant")
  $(".bet" + "B" + "Image").removeClass("shake-constant")
  $(".bet" + "C" + "Image").removeClass("shake-constant")
  $(".bet" + "D" + "Image").removeClass("shake-constant")
  $(".bet" + "E" + "Image").removeClass("shake-constant")
    renderBidButtomEvent(this, "A");
})
$(".betB").bind("click", function() {
  $(".bet" + "A" + "Image").removeClass("shake-constant")
  $(".bet" + "F" + "Image").removeClass("shake-constant")
  $(".bet" + "C" + "Image").removeClass("shake-constant")
  $(".bet" + "D" + "Image").removeClass("shake-constant")
  $(".bet" + "E" + "Image").removeClass("shake-constant")
    renderBidButtomEvent(this, "B");
})
$(".betC").bind("click", function() {
  $(".bet" + "A" + "Image").removeClass("shake-constant")
  $(".bet" + "B" + "Image").removeClass("shake-constant")
  $(".bet" + "F" + "Image").removeClass("shake-constant")
  $(".bet" + "D" + "Image").removeClass("shake-constant")
  $(".bet" + "E" + "Image").removeClass("shake-constant")
    renderBidButtomEvent(this, "C");
})
$(".betD").bind("click", function() {
  $(".bet" + "A" + "Image").removeClass("shake-constant")
  $(".bet" + "B" + "Image").removeClass("shake-constant")
  $(".bet" + "C" + "Image").removeClass("shake-constant")
  $(".bet" + "F" + "Image").removeClass("shake-constant")
  $(".bet" + "E" + "Image").removeClass("shake-constant")
    renderBidButtomEvent(this, "D");
})
$(".betE").bind("click", function() {
  $(".bet" + "A" + "Image").removeClass("shake-constant")
  $(".bet" + "B" + "Image").removeClass("shake-constant")
  $(".bet" + "C" + "Image").removeClass("shake-constant")
  $(".bet" + "D" + "Image").removeClass("shake-constant")
  $(".bet" + "F" + "Image").removeClass("shake-constant")
    renderBidButtomEvent(this, "E");
})
$(".betF").bind("click", function() {
  $(".bet" + "A" + "Image").removeClass("shake-constant")
  $(".bet" + "B" + "Image").removeClass("shake-constant")
  $(".bet" + "C" + "Image").removeClass("shake-constant")
  $(".bet" + "D" + "Image").removeClass("shake-constant")
  $(".bet" + "E" + "Image").removeClass("shake-constant")
    renderBidButtomEvent(this, "F");
})


$(".betSubmit").bind("click", function() {
    var betAAmt = isNaN(parseInt($(".betAAmt").html())) ? 0 : parseInt($(".betAAmt").html());
    var betBAmt = isNaN(parseInt($(".betBAmt").html())) ? 0 : parseInt($(".betBAmt").html());
    var betCAmt = isNaN(parseInt($(".betCAmt").html())) ? 0 : parseInt($(".betCAmt").html());
    var betDAmt = isNaN(parseInt($(".betDAmt").html())) ? 0 : parseInt($(".betDAmt").html());
    var betEAmt = isNaN(parseInt($(".betEAmt").html())) ? 0 : parseInt($(".betEAmt").html());
    var betFAmt = isNaN(parseInt($(".betFAmt").html())) ? 0 : parseInt($(".betFAmt").html());
    //debugger;
    var totalBetAmt = betAAmt + betBAmt + betCAmt + betDAmt + betEAmt + betFAmt

    if (totalBetAmt > 0) {
        //alert(1);
        clearInterval(sliceResult);
        var sliceResultA = $(".result1").attr("data-imageSign");
        var sliceResultB = $(".result2").attr("data-imageSign");
        var sliceResultC = $(".result3").attr("data-imageSign");
        var winAmt = 0


        if (betAAmt > 0) {
            var tempwinAmt = 0
            switch (sliceResultA) {
                case "A":
                    tempwinAmt += betAAmt;
                    break;
                default:
            }

            switch (sliceResultB) {
                case "A":
                    tempwinAmt += betAAmt;
                    break;
                default:
            }

            switch (sliceResultC) {
                case "A":
                    tempwinAmt += betAAmt;
                    break;
                default:
            }
            if (tempwinAmt > 0) {
                winAmt += betAAmt
            } else {
                winAmt -= betAAmt
            }
        }

        if (betBAmt > 0) {
            var tempwinAmt = 0
            switch (sliceResultA) {
                case "B":
                    tempwinAmt += betBAmt;
                    break;
                default:
            }

            switch (sliceResultB) {
                case "B":
                    tempwinAmt += betBAmt;
                    break;
                default:
            }

            switch (sliceResultC) {
                case "B":
                    tempwinAmt += betBAmt;
                    break;
                default:
            }
            if (tempwinAmt > 0) {
                winAmt += betBAmt
            } else {
                winAmt -= betBAmt
            }
        }

        if (betCAmt > 0) {
            var tempwinAmt = 0
            switch (sliceResultA) {
                case "C":
                    tempwinAmt += betCAmt;
                    break;
                default:
            }

            switch (sliceResultB) {
                case "C":
                    tempwinAmt += betCAmt;
                    break;
                default:
            }

            switch (sliceResultC) {
                case "C":
                    tempwinAmt += betCAmt;
                    break;
                default:
            }
            if (tempwinAmt > 0) {
                winAmt += betCAmt
            } else {
                winAmt -= betCAmt
            }
        }

        if (betDAmt > 0) {
            var tempwinAmt = 0
            switch (sliceResultA) {
                case "D":
                    tempwinAmt += betDAmt;
                    break;
                default:
            }

            switch (sliceResultB) {
                case "D":
                    tempwinAmt += betDAmt;
                    break;
                default:
            }

            switch (sliceResultC) {
                case "D":
                    tempwinAmt += betDAmt;
                    break;
                default:
            }
            if (tempwinAmt > 0) {
                winAmt += betDAmt
            } else {
                winAmt -= betDAmt
            }
        }

        if (betEAmt > 0) {
            var tempwinAmt = 0
            switch (sliceResultA) {
                case "E":
                    tempwinAmt += betEAmt;
                    break;
                default:
            }

            switch (sliceResultB) {
                case "E":
                    tempwinAmt += betEAmt;
                    break;
                default:
            }

            switch (sliceResultC) {
                case "E":
                    tempwinAmt += betEAmt;
                    break;
                default:
            }
            if (tempwinAmt > 0) {
                winAmt += betEAmt
            } else {
                winAmt -= betEAmt
            }
        }

        if (betFAmt > 0) {
            var tempwinAmt = 0
            switch (sliceResultA) {
                case "F":
                    tempwinAmt += betFAmt;
                    break;
                default:
            }

            switch (sliceResultB) {
                case "F":
                    tempwinAmt += betFAmt;
                    break;
                default:
            }

            switch (sliceResultC) {
                case "F":
                    tempwinAmt += betFAmt;
                    break;
                default:
            }
            if (tempwinAmt > 0) {
                winAmt += betFAmt
            } else {
                winAmt -= betFAmt
            }
        }
        var currentBalance = isNaN(parseInt($(".onhandAmt").html())) ? 0 : parseInt($(".onhandAmt").html())
        var newBalance = currentBalance + totalBetAmt + winAmt


        if (winAmt > 0) {
            winAlert(winAmt)
        } else if (winAmt < 0) {
            lostAlert(Math.abs(winAmt))
        } else {
            drewAlert(winAmt)
        }
        setMoney(newBalance)

        clearGameResult()
        //sliceGameResult()
    } else {
        noMoneyAlert()
    }
})

$(".dailyCheckin").bind("click", function() {

    myApp.modal({
        title: '簽到!?',
        text: '你要簽到嗎?簽到有$10000!!',
        buttons: [{
                text: '是的',
                onClick: function() {
                    var date = new Date();
                    var day = date.getDate();
                    var month = date.getMonth();

                    if (getCookie("checkIn", "date", 0) != month.toString() + day.toString()) {
                        setCookie("checkIn", {
                            "date": month.toString() + day.toString()
                        })
                        setCookieIndex("checkIn", "continueCheckIn", parseInt(getCookie("checkIn", "continueCheckIn", 0)) + 1)
                        afterCheckIn();
                        app.dialog.alert("你一共簽到了" + getCookie("checkIn", "continueCheckIn", 1) + " 次!!恭起發財");
                    } else {
                        app.dialog.alert("你今天已經簽到了!!");
                    }

                }
            },
            {
                text: '不了',
                onClick: function() {

                }
            }
        ]
    })
})
