
  function renderRankingList(array) {
    //debugger;
    var html="";
    html += "        <li>";
    html += "                    <a href=\"#\" class=\"item-content\">";
    html += "                      <div class=\"item-media\"><span class=\"badge\">"+array.item.rank+"<\/span><\/div>";
    html += "                      <div class=\"item-inner\">";
    html += "                        <div class=\"item-title\">"+ array.item.name +"<\/div>"
    html += "                        <div class=\"item-after\">"+"$"+array.item.mark+"<\/div>";
    html += "                      <\/div>";
    html += "                    <\/a>";
    html += "                  <\/li>";
    return html;
  }

  function renderSelfRankingList(array) {
    //debugger;
    var html="";
    html += "                   <li>";
    html += "                        <a href=\"#\" class=\"item-content\">";
    html += "                            <div class=\"item-media\"><span class=\"badge\">"+array.item.rank+"<\/span><\/div>";
    html += "                            <div class=\"item-inner\">";
    html += "                                <div class=\"item-title changeUserName\"><i class=\"f7-icons\">settings_fill<\/i> <span class=\"recordName\">"+array.item.name+"<\/span><\/div>";
    html += "                                <div class=\"item-after\">"+"$"+array.item.mark+"<\/div>";
    html += "                            <\/div>";
    html += "                        <\/a>";
    html += "                    <\/li>";
    return html;
  }

function addBindChnageNameAfterRender(){

  $(".changeUserName").bind("click", function() {
      myApp.prompt('你叫咩名?', function(value) {
          if (value != "") {
              changeUserName(value, function(e) {
                    setCookie("username", value)
                    app.dialog.alert("改左名啦",function(){
                    mainView.router.refreshPage();
                  });
              })
          }
      });
  });

}
  function changeUserName(name, callback) {
      if (typeof(callback) != "function") {
          callback = function() {};
      }

      $.ajax({
          type: "post",
          url: "http://gogogo.synology.me/api/fishshrimpcrab/changeUserName.php",
          data: {
              "deviceid": getDeviceID(),
              "name": name
          },
          dataType: "json",
          success: function(response) {
              callback(response)
          },
          error: function(response) {
              app.dialog.alert("Fail")
          }
      });
  }
