// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {

    // Always begin by clearing the data from the table.
    // Otherwise, the data could get messy with duplicate entries, etc.
    tbody.html("");

    // Create a function that will loop through the data and add each row's values to the table.
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // Now that the row has been appended to the array, add the values from the object to a cell
        // in the table.
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });

    });
};

// Create an empty filters object to store the input field values
let filters = {};

function updateFilters() {

    let changedElement = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");

    // Check if a value was entered by the user
    if (elementValue) {
    // If a value was entered, add the element's id as a property and the value that was changed to the filters object
    filters[filterId] = elementValue;
    } else {
    // If a value was not entered, clear the element id from the filters object
    delete filters[filterId];
    } 

    // // Find the data stored in the HTML tags, then store the value in a variable.
    // let date = d3.select("#datetime").property("value");
    // let city = d3.select("#city").property("value");
    // let state = d3.select("#state").property("value");
    // let country = d3.select("#country").property("value");
    // let shape = d3.select("#shape").property("value");

    // Add the input field values to the filters object if they are not empty
    // if (date) {
    //     filters.datetime = date;
    // }
    // if (city) {
    //     filters.city = city;
    // }
    // if (state) {
    //     filters.state = state;
    // }
    // if (country) {
    //     filters.country = country;
    // }
    // if (shape) {
    //     filters.shape = shape;
    // }

    // Filter the data using the input field values
    filterTable();
}

function filterTable() {
    // Set the filter to select data from the original data set. 
    let filteredData = tableData;

    // Loop through the filters object and apply the filters to the data
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    // Rebuild the table using the filtered data
    buildTable(filteredData);
}

// Detect a change in the input elements and apply the updateFilters function.
d3.selectAll("input").on("change", updateFilters);
  

// Build the table when the page loads.
buildTable(tableData);
