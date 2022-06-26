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
var form = d3.selectAll("input");

form.on("change", runEnter);

function runEnter() {
    d3.event.preventDefault();
    // select input elements and property values
    var date_input = d3.select("#datetime").property("value");
    var city_input = d3.select("#city").property("value");
    var state_input = d3.select("#state").property("value");
    var country_input = d3.select("#country").property("value");
    var shape_input = d3.select("#shape").property("value");

    //Empty table before appending results
    summarytable.html("");


    var filtered_data = tableData.filter(table => (table.datetime == date_input|| date_input == "")&&
                                                 (table.city == city_input|| city_input == "") &&
                                                 (table.state == state_input|| state_input == "") &&
                                                 (table.country == country_input|| country_input == "") &&
                                                 (table.shape == shape_input || shape_input == "")
                                                 );
    filtered_data.forEach((datachange) =>{
        var row = summarytable.append("tr");
        Object.entries(datachange).forEach(([key,value]) => {
            var cell = summarytable.append("td");
            cell.text(value);
        });
    });
}
