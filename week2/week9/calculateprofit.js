//Write a function calculateProfit that accepts the selling price, cost price, and number of
//units sold, and returns the profit for a small business selling products like maize flour.
function CalculateProfit(sellingPrice, costPrice, numberOfUnitsSold) {
    return (sellingPrice - costPrice) * numberOfUnitsSold;
}

let sellingPrice = 30000; // Selling price per unit
let costPrice = 20000;     // Cost price per unit
let numberOfUnitsSold = 4; // Number of units sold

let totalProfit = CalculateProfit(sellingPrice, costPrice, numberOfUnitsSold);
console.log(`The Profit is: ${totalProfit}`);

