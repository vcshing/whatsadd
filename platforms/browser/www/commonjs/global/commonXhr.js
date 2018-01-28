function updateRecord(mark, callback) {
    if (typeof(callback) != "function") {
        callback = function() {};
    }

    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/fishshrimpcrab/addrecord.php",
        data: {
            "deviceid": getDeviceID(),
            "name": getDeviceID(),
            "mark": mark,
            "lang": lang
        },
        dataType: "json",
        success: function(response) {
          callback();
        },
        error: function(response) {
          callback();
        }
    });
}
