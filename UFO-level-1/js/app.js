// from data.js
var tableData = data;

// YOUR CODE HERE!
//adding the whole dataset in table
var tbody = d3.select("tbody")
tableData.forEach((element) => {
    var row = tbody.append("tr")
    Object.entries(element).forEach(([key,value]) => {
        var cell = row.append("td")
        cell.text(value)
    }) 
})

//date_to_filter = []
var filterButton = d3.select("#filter-btn")
filterButton.on("click", function() {
    tbody.html("")
    var filterTab = d3.select(".form-control")
    var inputDate = filterTab.property("value")
    console.log(inputDate)
    var filteredData = tableData.filter(element => 
        element.datetime === inputDate)
        console.log(filteredData)
    filteredData.forEach((info) => {
        var row = tbody.append("tr")
        Object.entries(info).forEach(([key,value]) => {
            var cell = row.append("td")
            cell.text(value)
        })
    })
    
})

/*https://www.geeksforgeeks.org/javascript-add-new-elements-at-the-beginning-of-an-array/  
    date_to_filter.unshift(inputDate)
    console.log(date_to_filter[0]) */



