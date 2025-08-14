// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Define your data for the donut chart
const data = {
    labels: [
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [150 ,200], // Values for each segment
        backgroundColor: [
        "#51D289",
         "#D2D2D2"
        ],
        hoverOffset: 4 // Offset on hover for visual effect
    }]
};

// Configure the chart options
const config = {
    type: 'doughnut', // Specify 'doughnut' for a donut chart
    data: data,
    options: {
        cutout: '70%',
    }
};

// Create the donut chart
const myDonutChart = new Chart(ctx, config);