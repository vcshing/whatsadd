function init() {
    var countryCode = getCookie("countryCode", "", "852");
    $$('[name="countryCode"]').val(countryCode)
    //  $$('[name="countryCode"]').parent().parent().parent().addClass("item-input-with-value");

    $$(".sendWhatspp").on("click", function() {
        setCookie("countryCode", $$('[name="countryCode"]').val());
        var alertMsg = ""

        var countryCode = $('[name="countryCode"]').val();;
        var phone = $('[name="phone"]').val();
        var contents = $('[name="contents"]').val();
        if (countryCode == "") {
            alertMsg += "Please Enter Country Code <br/>"
        }
        if (phone == "") {
            alertMsg += "Please Enter PhoneNumber <br/>"
        }
        if (alertMsg != "") {
            app.dialog.alert(alertMsg, "Missing");
        }
        if (alertMsg == "") {
            var locationurl = "https://api.whatsapp.com/send?phone=" +
                countryCode + phone + "&text=" +
                encodeURIComponent(contents);
                var target = "_system";
                var options = "location=yes";
                var url = locationurl;
                window.open(url, target, options);
        }
    })
}
