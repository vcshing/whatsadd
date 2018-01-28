

myApp.onPageInit('ranking', function(page) {
    // Do something here for "about" page
  //  addRecord(onhandAmt)
  //  $(".recordName").bind("click",function(){
  //  alert(2);

  //  });
})

myApp.onPageInit('register', function(page) {
    // Do something here for "about" page

    $('.save-storage-data').on('click', function() {


    });


})

myApp.onPageInit('login', function(page) {
    // Do something here for "about" page

    $('.save-storage-data').on('click', function() {

    });


})




myApp.onPageInit('quotelist', function(page) {
    var cardHtml = "";
    // Loading flag
    var loading = false;

    var page = 1;
    // Attach 'infinite' event handler
    appendDesignCard();

    $$('.infinite-scroll').on('infinite', function() {
        // Exit, if loading in progress
        if (loading) return;
        // Set loading flag
        loading = true;

        setTimeout(function() {
            appendDesignCard()
        }, 1000);
    });

    function appendDesignCard() {
        loading = false;


        // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings

        //  return;


        $.ajax({
            type: 'POST',
            url: 'http://gogogo.synology.me/api/secret/getlist.php',
            data: {
                "page": page,
                "lang": lang,
                "deviceID": getDeviceID(),
                "publish": "0,1"
            },
            dataType: 'JSON',
            success: function(response) {
                if (response.status == 1) {

                    if (response.result.length == 0) {
                        myApp.detachInfiniteScroll($$('.infinite-scroll'));
                        $$('.infinite-scroll-preloader').remove();
                        return;
                    } else {

                        var cardHtml = "";
                        for (var i = 0; i < response.result.length; i++) {
                          var publishOptionName= "Publish To Public";
                          if (getCookie("publish", response.result[i].master_id, "0") != "1") {
                          }else{
                              var publishOptionName= "Published";
                          }

                            cardHtml += "			<div class=\"card\">";
                            cardHtml += "  <div class=\"card-header\">";
                            cardHtml += "" + response.result[i].name + "";
                            cardHtml += "<\/div>";
                            cardHtml += "				  <div class=\"card-content\">";
                            cardHtml += "  <div class=\"card-content-inner\">";
                            cardHtml += "<p style=\"white-space: pre-wrap;\">" + response.result[i].content_text + "</p>";
                            cardHtml += "<\/div>";
                            cardHtml += "				  <\/div>";
                            cardHtml += "				  <div class=\"card-footer\">";
                            //  cardHtml += "					<a href=\"#\" class=\"publishListLike\"  data-id=\"" + response.result[i].master_id + "\" >Like (" + "<span>" + response.result[i].likecount + "</span>" + ")<\/a>";
                            cardHtml += "		<a href=\"#\" class=\"publishList\"  data-id=\"" + response.result[i].master_id + "\" >"+ publishOptionName+"<\/a>";
                            cardHtml += "		<a href=\"#\" class=\"publishListDel\"  data-id=\"" + response.result[i].master_id + "\" >Delete<\/a>";
                            cardHtml += "				  <\/div>";
                            cardHtml += "				<\/div>";
                        }
                    }


                    // Append new items
                    $$('.loopCardContent').append(cardHtml);

                    // Update last loaded index
                    page++;

                    $(".publishListLike").bind("click", function(e) {
                        //debugger;
                        var self = $(this);

                        if (getCookie("like", $(this).attr("data-id"), "0") != "1") {
                            $.ajax({
                                type: 'POST',
                                url: 'http://gogogo.synology.me/api/secret/addlike.php',
                                data: {
                                    "masterid": self.attr("data-id"),
                                },
                                dataType: 'JSON',
                                success: function(response) {
                                    if (response.status == 1) {
                                        setCookieIndex("like", self.attr("data-id"), "1");
                                        self.find("span").html(parseInt(self.find("span").html()) + 1);
                                        if (typeof(window.plugins) != "undefined") {
                                            window.plugins.toast.showLongBottom('Liked', function(a) {}, function(b) {})
                                        }
                                    }
                                }
                            });
                        } else {
                            if (typeof(window.plugins) != "undefined") {
                                window.plugins.toast.showLongBottom('You already Liked', function(a) {}, function(b) {})
                            }
                        }
                    });

                    $(".publishList").bind("click", function(e) {

                        var self = $(this);

                        if (getCookie("publish", $(this).attr("data-id"), "0") != "1") {
                            //  debugger;
                            myApp.modal({
                              title:  'Publish?',
                              text: 'The Message will publish at InApp and Facebook Fage (Anonymous but Cannot Delete At Facebook)',
                              buttons: [
                                {
                                  text: 'OK',
                                  onClick: function() {
                                    $.ajax({
                                        type: 'POST',
                                        url: 'http://gogogo.synology.me/api/secret/publish.php',
                                        data: {
                                            "masterid": self.attr("data-id"),
                                        },
                                        dataType: 'JSON',
                                        success: function(response) {
                                            if (response.status == 1) {
                                                setCookieIndex("publish", self.attr("data-id"), "1");

                                                self.html("Published");
                                                if (typeof(window.plugins) != "undefined") {
                                                  //  window.plugins.toast.showLongBottom('Published', function(a) {}, function(b) {})
                                                    app.dialog.alert("Published");
                                                } else {
                                                    app.dialog.alert("Published");
                                                }
                                            }
                                        }
                                    });
                                  }
                                },
                                {
                                  text: 'Cancel',
                                  onClick: function() {
                                  //  app.dialog.alert('You clicked second button!')
                                  }
                                }
                              ]
                            })

                        } else {
                            if (typeof(window.plugins) != "undefined") {
                                window.plugins.toast.showLongBottom('You already published', function(a) {}, function(b) {})
                            } else {
                                app.dialog.alert("You already published");
                            }
                        }
                    });

                    $(".publishListDel").bind("click", function(e) {

                        var self = $(this);


                        $.ajax({
                            type: 'POST',
                            url: 'http://gogogo.synology.me/api/secret/delete.php',
                            data: {
                                "masterid": self.attr("data-id"),
                                "publish": 9,
                            },
                            dataType: 'JSON',
                            success: function(response) {
                                if (response.status == 1) {
                                    self.find("span").html("Deleted");
                                    if (typeof(window.plugins) != "undefined") {
                                        app.dialog.alert("Deleted");
                                        self.parent().parent().hide()
                                    } else {
                                        app.dialog.alert("Deleted");
                                        self.parent().parent().hide()
                                    }
                                }
                            }
                        });
                    });

                } else {
                    app.dialog.alert("Server Error, Please Try Again Later");
                }
            },
            error: function(response) {
                app.dialog.alert("Server Error, Please Try Again Later");
            }
        });
    }
})



myApp.onPageInit('quotelistPublic', function(page) {

    var cardHtml = "";
    // Loading flag
    var loading = false;

    var page = 1;
    // Attach 'infinite' event handler
    appendDesignCard();

    $$('.infinite-scroll').on('infinite', function() {
        // Exit, if loading in progress
        if (loading) return;
        // Set loading flag
        loading = true;

        setTimeout(function() {
            appendDesignCard()
        }, 1000);
    });

    function appendDesignCard() {
        loading = false;


        // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings

        //  return;


        $.ajax({
            type: 'POST',
            url: 'http://gogogo.synology.me/api/secret/getlist.php',
            data: {
                "page": page,
                "lang": lang,
                "publish": "1"
            },
            dataType: 'JSON',
            success: function(response) {
                if (response.status == 1) {

                    if (response.result.length == 0) {
                        myApp.detachInfiniteScroll($$('.infinite-scroll'));
                        $$('.infinite-scroll-preloader').remove();
                        return;
                    } else {

                        var cardHtml = "";
                        for (var i = 0; i < response.result.length; i++) {
                          var publishOptionName= "Publish To Public";
                          if (getCookie("publish", response.result[i].master_id, "0") != "1") {
                          }else{
                              var publishOptionName= "Published";
                          }

                            cardHtml += "			<div class=\"card\">";
                            cardHtml += "  <div class=\"card-header\">";
                            cardHtml += "" + response.result[i].name + "";
                            cardHtml += "<\/div>";
                            cardHtml += "				  <div class=\"card-content\">";
                            cardHtml += "  <div class=\"card-content-inner\">";
                            cardHtml += "<p style=\"white-space: pre-wrap;\">" + response.result[i].content_text + "</p>";
                            cardHtml += "<\/div>";
                            cardHtml += "				  <\/div>";
                            cardHtml += "				  <div class=\"card-footer\">";
                              cardHtml += "					<a href=\"#\" class=\"publishListLike\"  data-id=\"" + response.result[i].master_id + "\" >Like (" + "<span>" + response.result[i].likecount + "</span>" + ")<\/a>";
                          //  cardHtml += "		<a href=\"#\" class=\"publishList\"  data-id=\"" + response.result[i].master_id + "\" >"+ publishOptionName+"<\/a>";
                          //  cardHtml += "		<a href=\"#\" class=\"publishListDel\"  data-id=\"" + response.result[i].master_id + "\" >Delete<\/a>";
                            cardHtml += "				  <\/div>";
                            cardHtml += "				<\/div>";
                        }
                    }


                    // Append new items
                    $$('.loopCardContent').append(cardHtml);

                    // Update last loaded index
                    page++;

                    $(".publishListLike").bind("click", function(e) {
                        //debugger;
                        var self = $(this);

                        if (getCookie("like", $(this).attr("data-id"), "0") != "1") {
                            $.ajax({
                                type: 'POST',
                                url: 'http://gogogo.synology.me/api/secret/addlike.php',
                                data: {
                                    "masterid": self.attr("data-id"),
                                },
                                dataType: 'JSON',
                                success: function(response) {
                                    if (response.status == 1) {
                                        setCookieIndex("like", self.attr("data-id"), "1");
                                        self.find("span").html(parseInt(self.find("span").html()) + 1);
                                        if (typeof(window.plugins) != "undefined") {
                                            window.plugins.toast.showLongBottom('Liked', function(a) {}, function(b) {})
                                        }
                                    }
                                }
                            });
                        } else {
                            if (typeof(window.plugins) != "undefined") {
                                window.plugins.toast.showLongBottom('You already Liked', function(a) {}, function(b) {})
                            }
                        }
                    });



                } else {
                    app.dialog.alert("Server Error, Please Try Again Later");
                }
            },
            error: function(response) {
                app.dialog.alert("Server Error, Please Try Again Later");
            }
        });
    }
})
