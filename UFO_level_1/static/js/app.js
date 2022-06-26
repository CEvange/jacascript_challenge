// from data.js
var tableData = data;

// select the table body
var summarytable = d3.select("tbody")

// UFO sightings data for each column
tableData.forEach(function(ufo_data){
    console.log(ufo_data);
    var row = summarytable.append("tr");
    Object.entries(ufo_data).forEach(function([key,value]){
        var cell = row.append("td");
        cell.text(value);
    });
});

// select the button
var filter_button = d3.select("#filter-btn");

filter_button.on("click", function(){
    summarytable.html("");
    // select input element
    var input_date = d3.select("#datetime");

    // Get the value property of the input element
    var input_value = input_date.property("value");

    var filtered_data = tableData.filter(table => table.datetime === input_value);
    filtered_data.forEach(function(datechange){
        var row = summarytable.append("tr");
        Object.entries(datechange).forEach(function([key,value]){
            var cell = summarytable.append("td");
            cell.text(value);
        });
    });
});
    