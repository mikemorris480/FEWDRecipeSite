// Function to toggle between Metric and US measurements
function toggleMeasurements() {
    const measurementElements = document.querySelectorAll('[data-measurement]');
    
    measurementElements.forEach(element => {
        const metricValue = element.getAttribute('data-metric');
        const usValue = element.getAttribute('data-us');
        const currentUnit = element.getAttribute('data-current-unit');

        if (currentUnit === 'metric') {
            element.textContent = usValue;
            element.setAttribute('data-current-unit', 'us');
        } else {
            element.textContent = metricValue;
            element.setAttribute('data-current-unit', 'metric');
        }
    });
}

document.getElementById('toggleButton').addEventListener('click', toggleMeasurements);