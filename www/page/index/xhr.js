function ajaxGetExamType(callback) {
    if (typeof(callback) != "function") {
        callback = function(response) {
        //  debugger;
        };
    }

    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/vote/gettype.php",
        data: {
            "lang": lang
        },
        dataType: "json",
        success: function(response) {
          callback(response);
          //callback(response);
        },
        error: function(response) {
          callback(response);
        }
    });
}


function ajaxGetTopicList(array,callback) {
    if (typeof(callback) != "function") {
        callback = function() {};
    }

    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/api/vote/getdata.php",
        data: {
            "page": array.page,
            "type": array.type,
            "id": array.id
        },
        dataType: "json",
        success: function(response) {
          callback(response);
        },
        error: function(response) {
          callback(response);
        }
    });
}
