//Write a constructor function for a Hospital object in Uganda, with properties like name,
 //location, numberOfBeds

 function Hospital(name, location, numberOfBeds) {
    this.name = name;
    this.location = location;
    this.numberOfBeds = numberOfBeds;
    
    // Method to display hospital information
    this.displayInfo = function() {
        console.log(`Hospital Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Number of Beds: ${this.numberOfBeds}`);
    };
}
let mulagoHospital = new Hospital("Mulago National Referral Hospital", "Kampala, Uganda", 1500);
mulagoHospital.displayInfo();