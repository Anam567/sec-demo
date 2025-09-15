let distance = 19.5;
let fare = 0;
if (distance <= 4) {
    fare = 30;
}
else if (distance <= 9) {
    // First 4 km = ₹30
    // Next (distance - 4) km = ₹10 per km
    fare = 30 + (distance - 4) * 10;
}
else if (distance <= 19) {
    // First 4 km = ₹30
    // Next 5 km (4-9) = ₹10 per km
    // Next (distance - 9) km = ₹15 per km
    fare = 30 + (5 * 10) + (distance - 9) * 15;
}
else {
    // First 4 km = ₹30
    // Next 5 km = ₹10/km
    // Next 10 km = ₹15/km
    // Remaining (distance - 19) km = ₹20/km
    fare = 30 + (5 * 10) + (10 * 15) + (distance - 19) * 20;
}
console.log("You travelled " + distance + " km");
console.log("Your total fare is ₹" + fare);
