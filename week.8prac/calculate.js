

    // Method to calculate total capacity based on wards and beds per ward
    this.calculateCapacity = function(numberOfWards, bedsPerWard) {
        this.numberOfBeds = numberOfWards * bedsPerWard;
        return this.numberOfBeds;
    };


// Update the total capacity
let numberOfWards = 30;
let bedsPerWard = 50;
let totalCapacity = mulagoHospital.calculateCapacity(numberOfWards, bedsPerWard);
console.log(`Total Capacity: ${totalCapacity} beds`);

// Display updated hospital information with new total capacity
mulagoHospital.displaylnfo()






















