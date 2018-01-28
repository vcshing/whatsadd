$(".ranking").bind("click",function(){
  mainView.router.loadPage("page/ranking/ranking.html")
   myApp.closePanel();
});

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
