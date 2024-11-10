function calculateIncome(kilometers) {
    let incomePerKm = 5000;
    return kilometers * incomePerKm;
    }
    let kilometersTraveled = 50; 
    let dailyIncome = calculateIncome(kilometersTraveled);
    console.log(`The total income for the day is UGX ${dailyIncome}`);
    
    