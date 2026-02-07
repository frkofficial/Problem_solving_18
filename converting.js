// 12 inch 1 feet

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}

const YourHeight = inchToFeet(75)

console.log(YourHeight);

function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);

    const inchRemainning = inch % 12;

    const result = feetNumber + ' fit' + ' ' + inchRemainning + ' inch'; 
    return result
}

const yourHeight2 = inchToFeet2(75)

console.log(yourHeight2)


// miles to kilometer 
// 1 miles = 1.6 kilometer 

function milesToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const kiloResult = milesToKilometer(40);

console.log(kiloResult)