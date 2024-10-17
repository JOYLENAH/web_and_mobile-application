//In a market, a vendor in Kampala gives a discount if the total price of products exceed 100,000 UGX. Write a JavaScript program that stores the prices of three products and calculates their total. Use an if statement to determine if the discount is applicable. 

 // total=1000000;

 let price1 = 40000;
let price2 = 35000;
let price3 = 30000;

// Calculate the total price
let totalPrice = price1 + price2 + price3;

//the discount
const discount = 100000;

// Check if the total price exceeds the threshold for a discount
if (totalPrice > discount) {
    console.log("Discount is applicable!");
} else {
    console.log("No discount applied.");
}

// Display the total price
console.log("Total Price: " + totalPrice + " UGX")











