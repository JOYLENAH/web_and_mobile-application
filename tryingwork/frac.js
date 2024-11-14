
//Create a higher-order function fetchData that simulates fetching data from a server. It should
//accept a callback function that displays a message like "Data successfully retrieved from the server

// Higher-order function that simulates fetching data
let fetchData = (callback) => {

    setTimeout(() => {
        
        callback("Data successfully retrieved from the server.");
    }, 2000); 
};

// Example callback function
let displayMessage = (message) => {
    console.log(message);
};

// Example usage
fetchData(displayMessage);
