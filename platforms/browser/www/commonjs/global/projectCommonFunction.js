Url = {
    get get() {
        var vars = {};
        if (window.location.search.length !== 0)
            window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
                key = decodeURIComponent(key);
                if (typeof vars[key] === "undefined") {
                    vars[key] = decodeURIComponent(value);
                } else {
                    vars[key] = [].concat(vars[key], decodeURIComponent(value));
                }
            });
        return vars;
    }
};

function openElementUrl(element,target){
  var options = "location=yes";
  window.open($(element).html(), target, options);
}

function toCode(TempStrWord, BIGtoGB) {
    var TempStr = "";
    var TempStr1 = "";
    var TempWordMath = 0;
    var TempWordHex = new Array();

    for (i = 0; i < TempStrWord.length; i++) {
        TempStr1 = TempStrWord.charAt(i);
        TempWordMath = TempStr1.charCodeAt(0);
        switch (BIGtoGB) {
            case 0:
                if (!toGB[TempWordMath]) {
                    TempStr += TempStr1;
                } else {
                    TempStr += String.fromCharCode(toGB[TempWordMath]);
                }
                break;
            case 1:
                if (!toBIG[TempWordMath]) {
                    TempStr += TempStr1;
                } else {
                    TempStr += String.fromCharCode(toBIG[TempWordMath]);
                }
                break;
            case 2:
                if (!toGB2[TempWordMath]) {
                    TempStr += TempStr1;
                } else {
                    TempStr += toGB2[TempWordMath];
                }
                break;
            case 3:
                if (!toBIG2[TempWordMath]) {
                    TempStr += TempStr1;
                } else {
                    TempStr += toBIG2[TempWordMath];
                }
                break;
        }
    }
    return TempStr;
}

function checkLang() {
    if (typeof(navigator.language) != "undefined") {
        if (navigator.language.split('-')[0] == "zh") {
            if (typeof(navigator.language.split('-')[1]) != "undefined") {
                if (navigator.language.split('-')[1].toLowerCase() == "tw" ||
                    navigator.language.split('-')[1].toLowerCase() == "hk") {
                    var lang = "zh-tw"
                } else {
                    var lang = "zh-cn"
                }
            }
        } else {
            var lang = navigator.language.split('-')[0];
        }
    } else {
        var lang = "en";
    }

    return lang;
}

function setLang() {
    if (checkLang() == "zh-tw") {
        $(".langtc").hide();
    }

    if (checkLang() == "en") {
        $(".langen").hide();
    }

    if (lang == checkLang()) {
        $(".langDefault").addClass("button-fill");
        $(".langtc").removeClass("button-fill");
        $(".langen").removeClass("button-fill");
    } else if (lang == "zh-tw") {
        $(".langtc").addClass("button-fill");
        $(".langen").removeClass("button-fill");
        $(".langDefault").removeClass("button-fill");
    } else {
        $(".langen").addClass("button-fill");
        $(".langtc").removeClass("button-fill");
        $(".langDefault").removeClass("button-fill");
    }
}

function getCookie(index, contentIndex, defaultValue) {
    var contentIndex = String(contentIndex);
    try {
      var cookie = storageManager.getCookie(index);
    } catch (err) {
      return defaultValue;
    }
    if (cookie == "" || cookie == null) {
        return defaultValue;
    } else if (contentIndex == "") {
        return cookie;
    } else {

        if (cookie[contentIndex] == undefined) {
            return defaultValue;
        } else {
            return cookie[contentIndex];
        }
    }
}

function setCookie(index, array) {
    storageManager.setCookie(index, array)
}

function clearCookie(index) {
    storageManager.clearCookie(index)
}

function setCookieIndex(index, contentIndex, content) {

    var contentIndex = String(contentIndex);
    var cookieArray = getCookie(index, "", [])
    if (contentIndex == "") {
        cookieArray[cookieArray.length] = content;
    } else {
        cookieArray[contentIndex] = content;
    }

    storageManager.setCookie(index, cookieArray)
}
function clearAllCookie() {
  storageManager.clear()
}


function frontEndTranslateToSelectedLang(defaultLangArr, callback) {
    var defaultLangArrToWord = "";
    if (typeof(defaultLangArr) == "string") {
        defaultLangArrToWord = defaultLangArr;
    } else {
        $.each(defaultLangArr, function(a, b) {
            defaultLangArrToWord += ("" + b + "✰");
        })
    }
    //lang="ru";
    var translatedLangArr = [];
    translate(defaultLangArrToWord, lang, function(translatedText) {
        translatedText = translatedText.match(/[^[\✰]+/gm);

        $.each(translatedText, function(a, b) {
            if (b != "" && b != " ") {
                translatedLangArr.push(b);
            }
        })

        if (typeof(callback) == "function") {
            callback(translatedLangArr);
        }
    })
}

function assignWordClassTranslation(translatedLangArr, containClass) {
    $("." + containClass).each(function(a, b) {

        if ($(this).html() != "" && $(this).html() != "undefined") {
            $(this).html(translatedLangArr[a]);
        } else if ($(this).attr("placeholder") != "" && $(this).attr("placeholder") != "undefined") {
            $(this).attr("placeholder", translatedLangArr[a]);
        }
    })
}

function assignLoopWordClassTranslation(translatedLangArr) {

    $.each(translatedLangArr, function(index, content) {

        $(".loopword" + index).html(translatedLangArr[index]);
    })
}

function translate(keyword, lang, callback) {
    if (typeof(callback) != "function") {
        callback = function() {};
    }
    $.ajax({
        type: "post",
        url: "http://gogogo.synology.me/googletranslate/translateArr.php",
        data: {
            "keyword": keyword,
            "lang": lang
        },
        dataType: "json",
        success: function(response) {
            //  debugger;
            var translatedText = response["data"]["translations"][0]["translatedText"]
            var JsonTranslatedText = translatedText;
            callback(JsonTranslatedText);
        },
        error: function(response) {
            var translatedText = keyword;
            var JsonTranslatedText = translatedText;
            callback(JsonTranslatedText);
        }
    });
}

function sec2str(t) {
    var d = Math.floor(t / 86400),
        h = ('0' + Math.floor(t / 3600) % 24).slice(-2),
        m = ('0' + Math.floor(t / 60) % 60).slice(-2),
        s = ('0' + t % 60).slice(-2);
    return (d > 0 ? d + 'Day ' : '') + (h > 0 ? h + ':' : '') + (m > 0 ? m + ':' : '') + (t > 60 ? s : s + 'Sec');
}

function saveImageToPhone(url, success, error) {


    var canvas, context, imageDataUrl, imageData;
    var img = new Image();
    img.onload = function() {
        canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        try {
            imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);
            imageData = imageDataUrl.replace(/data:image\/jpeg;base64,/, '');
            cordova.exec(
                success,
                error,
                'Canvas2ImagePlugin',
                'saveImageDataToLibrary', [imageData]
            );
        } catch (e) {
            error(e.message);
        }
    };
    try {
        img.src = url;
    } catch (e) {
        error(e.message);
    }

}

function randomEvent(pool, callback) {
    if (Math.floor(Math.random() * pool) + 1 == 1) {
        callback();
    }
}

function saveImageAsJpg(name, address) {
    var link = document.createElement('a');
    link.style = 'position: fixed; left -10000px;'; // making it invisible
    link.href = 'data:application/octet-stream,' + encodeURIComponent(address); // forcing content type
    link.download = name.indexOf('.jpg') < 0 ? name + '.jpg' : name;
    /* file extension is very important! */
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function getDeviceID(){
  if (typeof(device) == "undefined" || device.uuid == null) {
      var deviceID = getCookie("deviceid", 0, "");
      if(deviceID==""){
        deviceID = getRandomNumber();
      }
      setCookieIndex("deviceid", 0, deviceID);
      return deviceID;
  } else {
      return device.uuid;
  }
}
function getRandomNumber() {
  return String(new Date().valueOf()) + String(Math.floor(Math.random() * 1001));
}

function showloading(){
  myApp.showPreloader();
}

function hideloading(){
    myApp.hidePreloader();
}

function googleInAppGetProduct(callback){
  if (typeof(callback) != "function") {
      callback = function() {};
  }
  inAppPurchase
    .getProducts(['com.skyexplorer.fishshrimpcrab'])
    .then(function (products) {
      alert(JSON.stringify(products));
      /*
         [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', currency: '...', price: '...', priceAsDecimal: '...' }, ...]
      */
      callback(products)
    })
    .catch(function (err) {
      alert(JSON.stringify(err));
    });
}

function googleInAppBuyProduct(callback){
  if (typeof(callback) != "function") {
      callback = function() {};
  }
  inAppPurchase
    .buy('com.skyexplorer.fishshrimpcrab')
    .then(function (data) {
      alert(JSON.stringify(data));
      /*
        {
          transactionId: ...
          receipt: ...
          signature: ...
        }
      */
        callback(data)
    })
    .catch(function (err) {
      alert(JSON.stringify(err));
    });
}
