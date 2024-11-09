//calculating fees
function calculatefees(tuitionfee,boardingfee=50000){
    return tuitionfee+boardingfee
}
let totalfees=calculatefees(2000000);
console.log(`the total fees(with boarding)are ugx ${totalfees}`);


let totalfeeswithoutboarding=calculatefees(2000000,0);
console.log(`the totalfees (without boarding) are ugx${totalfeeswithoutboarding}`)