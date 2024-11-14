//Create an arrow function calculateArea that takes in the length and width of a plot of land (in
    //meters) in Kampala and returns the area.
    let calculateArea = (length, width) => {
        return length * width;
    };
    
    // Example usage:
    let length = 50; // Length in meters
    let width = 30;  // Width in meters
    let area = calculateArea(length, width);
    console.log(`The area of the plot of land is: ${area} square meters`);
    