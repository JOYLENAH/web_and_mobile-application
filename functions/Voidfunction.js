//void function
function NAME(joseph){
    var value_a=joseph

    console.log("how are you",value_a)

}
NAME("joy");

// using return function
function NAME(joseph){
    return joseph;
}
console.log("how are you",NAME("JOSEPH"));


// calculating function 
function calculateprofit(selling_price,cost_price,number_of_units){
    var profits=selling_price-cost_price;
    console.log("the profits for a small business selling  products were ",profits," and the units sold were",number_of_units)

}
calculateprofit(45000,25000,5)

