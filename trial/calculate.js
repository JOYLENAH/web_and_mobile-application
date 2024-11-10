//Write a function that calculates the total electricity bill for a household in Kampala based
//on the number of units consumed.
function calculateElectricityBill(units) {
    let bill = 0;
    
    if (units <= 15) {
        bill = units * 100;
    } else if (units <= 50) {
        bill = (15 * 100) + ((units - 15) * 200);
    } else {
        bill = (15 * 100) + (35 * 200) + ((units - 50) * 300);
    }
    
    return bill;
}
calculateElectricityBill()

