function calculateWaterUsage(weeklyUsage) {
    if (weeklyUsage.length !== 7) {
        throw new Error("Please provide exactly 7 days of water usage data.");
    }

    // Calculate the total water usage over the week
    const totalUsage = weeklyUsage.reduce((acc, usage) => acc + usage, 0);

    // Calculate the average daily water usage
    const averageUsage = totalUsage / 7;

    return averageUsage;
}

// Example usage:
const weeklyWaterUsage = [150, 200, 180, 220, 170, 190, 160]; // Example daily usage in liters
const averageDailyUsage = calculateWaterUsage(weeklyWaterUsage);
console.log(`Average daily water usage: ${averageDailyUsage.toFixed(2)} liters`);