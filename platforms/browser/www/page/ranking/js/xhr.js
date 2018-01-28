function ajaxRankingList(callback) {
    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/fishshrimpcrab/showrecord.php",
        data: {},
        dataType: "json",
        success: function(response) {
            callback(response)
        },
        error: function(response) {
            app.dialog.alert("Fail")
        }
    });
}

function ajaxSelfRankingList(callback) {
    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/fishshrimpcrab/showrecord.php",
        data: {"deviceid":getDeviceID()},
        dataType: "json",
        success: function(response) {
            callback(response)
        },
        error: function(response) {
            app.dialog.alert("Fail")

        }
    });
}
