// a function calculate internet cost
function calculateInternetCost(defaultvalue=50000,dataBundle){
    if (dataBundle <= 0) {
        return "Invalid data bundle size";
    }

    // Base cost
    let totalCost = defaultvalue;

    // Assuming the cost increases based on the size of the data bundle
    // This is an example; you can adjust the pricing logic as needed
    const costPerGB = 10000; // Example cost per GB
    totalCost += (dataBundle = 5); // Example data bundle size in GB
const totalCost = calculateInternetCost(defaultCost, dataBundleSize);
console.log(`Total Internet Cost: ${totalCost}`);