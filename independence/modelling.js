let marketvendor={
    name:"nakawa",
    location:"kampala",
    product:[
        {name:"banana",price:1500,quantity:2},
        {name:"cassava",price:3000,quantity:4},
        {name:"tomatoes",price:5000,quantity:1}
    ],
    calculateTotal() {
        return this.product.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);
    }
};

console.log(`The total value is:UGX${marketvendor.calculateTotal()}`)