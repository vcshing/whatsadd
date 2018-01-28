myApp.onPageInit('ranking', function(page) {
    showloading();
    updateRecord(onhandAmt,function() {

        ajaxRankingList(function(response) {
            var rankingListHtml = "";
            //  debugger;
            $.each(response.result, function(key, item) {
                rankingListHtml += renderRankingList({
                    "index": key,
                    "item": item
                });
            });

            $(".rankingList").html(rankingListHtml);
            hideloading();
        })

        ajaxSelfRankingList(function(response) {
            var rankingListHtml = "";

            $.each(response.result, function(key, item) {
                rankingListHtml += renderSelfRankingList({
                    "index": key,
                    "item": item
                });
            });

            $(".rankingSelfList").html(rankingListHtml);
            addBindChnageNameAfterRender();
            hideloading();
        })


    })

})
