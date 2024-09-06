// First we will define the original state of the content that will be displayed.
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "Gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
    { name: "Prof. Prism", price: 81, occupation: "Teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
    { name: "Prof. Spark", price: 76, occupation: "Programmer" },
    { name: "Dr. Wire", price: 47, occupation: "Teacher" },
    { name: "Mabel Stephens", price: 77, occupation: "Web Developer" },
    { name: "Jazmin Todd", price: 69, occupation: "Sales" },
    { name: "Joelle Fitzpatrick", price: 31, occupation: "SEO Manager" },
    { name: "Blaze Huynh", price: 44, occupation: "Carpenter" },
    { name: "Simon Ferguson", price: 50, occupation: "Plumber" },
    { name: "Aliana Crawford", price: 67, occupation: "UI/UX Analyst" },
    { name: "Harper Stevens", price: 44, occupation: "Landscaper" },
    { name: "Addison Coffey", price: 98, occupation: "Language Tanslator" },
    { name: "Murphy Tapia", price: 90, occupation: "Policy Analyst" },
    { name: "Henrik Blankenship", price: 15, occupation: "Business Analyst" },
    { name: "Santino Campbell", price: 23, occupation: "Designer" },
    { name: "Sage Yates", price: 91, occupation: "Painter" },
    { name: "Crystal Jacobs", price: 87, occupation: "Programmer" },
];

const initialFreelancers = [
    { name: "Saul Leach", price: 35, occupation: "Gardener" },
    { name: "Ephraim Chang", price: 52, occupation: "Programmer" },
    { name: "Carter Blackwell", price: 73, occupation: "Teacher" },
    { name: "Remi Thompson", price: 61, occupation: "Teacher" },
];

const maxFreelancers = 20;
const fieldNames = ["Name", "Occupation", "Starting Price"]

// Function to add freelancers to display at regular intervals
const addFreelancerIntervalId = setInterval(addFreelancer, 2000);

function averageStartingPrice() {
    const averageStartingPrice = initialFreelancers.reduce((total, item) => {
        total += item.price
        return total
    }, 0)

    return averageStartingPrice / initialFreelancers.length
}

// Function to render the initial state and to update the DOM
function render() {
    // Render the initial state
    const freelancers = document.querySelector("#freelancer-table");
    freelancers.innerHTML = "";
    const headerRow = document.createElement("tr");

    // Render the column names first
    fieldNames.forEach((fieldName) => {
        const tableData = document.createElement("td");
        tableData.textContent = fieldName
        headerRow.appendChild(tableData)
    });

    freelancers.appendChild(headerRow)

    // Render rows of data
    for (let i = 0; i < initialFreelancers.length; i++) {

        const tableRow = document.createElement("tr")
        const tableData1 = document.createElement("td");
        const tableData2 = document.createElement("td");
        const tableData3 = document.createElement("td");
        tableData1.textContent = initialFreelancers[i].name
        tableData2.textContent = initialFreelancers[i].occupation
        tableData3.textContent = initialFreelancers[i].price
        tableRow.appendChild(tableData1)
        tableRow.appendChild(tableData2)
        tableRow.appendChild(tableData3)
        freelancers.appendChild(tableRow)
    }

    const updateAveragePrice = document.querySelector(".average-price")
    updateAveragePrice.innerHTML = `The average starting price is: ${averageStartingPrice().toFixed(2)}`
}

// Call the render function
render();

// Function to add rows
function addFreelancer() {
    const rowData = freelancers[Math.floor(Math.random() * freelancers.length)];

    initialFreelancers.push(rowData)

    render();

    if (initialFreelancers.length > 20) {
        clearInterval(addFreelancerIntervalId)
    }
}