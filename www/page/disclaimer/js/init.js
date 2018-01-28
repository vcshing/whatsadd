function userReadStatisticsInit(page) {
    var chartArr = [];
    chartArr["result"] = [];

    google.charts.load('current', {'packages':['corechart']});

    ajaxGetStatisticsDetail({
        "id": page.detail.route.query.id
    }, function(response) {
    //debugger;
        chartArr["result"][0] = ["Task", "Result"]
        $(response.result).each(function(index, result) {
          chartArr["result"].push([result.answer, result.choiceCount])
        })
        //debugger;
        if(chartArr["result"][1][0] == null){
          chartArr["result"][1] = ["No Result", 1];
        }
        chartArr["title"] = response.result[0].title
        chartArr["question"] = response.result[0].question
        google.charts.setOnLoadCallback(function() { drawChart(chartArr); });
    })

}
