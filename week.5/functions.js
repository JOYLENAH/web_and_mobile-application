var num=23;
var num_two=2;
var sum=num+num_two;
console.log("sum",sum)

var num_three=40
var num_four=24

var sum_two=num_three+num_four;
console.log("sum_two",sum_two)

//functions without parameters
function summation(){

var num_five=40;
var num_six=4;

var sum_three=num_five+num_six;
console.log("sum three",sum_three);

}
summation();

//returning function
function summation_two(){

    var num_five=40;
    var num_six=4;
    
    var sum_three=num_five+num_six;
    return sum_three
    
    }
    // use it by printing the value directly on the terminal
    console.log("sum four",summation_two())

    //assigning the value to a variable
    var sum_four=summation_two();

    var sum_five =summation();
    console.log(sum_five)


    // void functins with parameters
    function summation_three(num_five,num_six){
        var sum_six=num_five+num_six;

        console.log("sum six",sum_six)

    }
    summation_three(40,4)

    summation_three(120,18)

    summation_three(2,2)

    //  returning functions with parameters
    function summation_four(num_five,num_six){
        return num_five+num_six;
    }
// use it by printing the vaue directly on the terminal
console.log("sum five",summation_four(23,5));

// assigning the value to the variable 
var sum_five=summation_four(265,58)
console.log("sum_five",sum_five)



//a function that takes my name and prints the
function NAME(joseph){
    return joseph;
}
console.log("how are you",NAME("JOSEPH"));
NAME("joseph");
//VOID
function NAME(joseph){
    var value_a=joseph

    console.log("how are you",value_a)

}
NAME("joy");

