// PROMPT SOLUTION
const inputKilometres = prompt("What is your travel distance? : ");
const inputAge = prompt("Enter your age? : ");

const kilometrePrice = 0.21;
const juniorAge = 17;
const seniorAge = 65;
const discountJunior = 0.20; // 20%
const discountSenior = 0.40; // 40%

if (inputAge <= juniorAge) {
    window.alert("Your ticket price is: " + getTicketPriceJunior(inputKilometres) + " $");
}

else if (inputAge > juniorAge && inputAge < seniorAge) {
    window.alert("Your ticket price is: " + getTicketPriceAdult(inputKilometres) + " $")
}

else if (inputAge >= seniorAge) {
    window.alert("Your ticket price is: " + getTicketPriceSenior(inputKilometres) + " $");
}

function priceDefault() {
    return inputKilometres * kilometrePrice;
}

function getTicketPriceJunior() {
    return priceDefault() - priceDefault() * discountJunior;
}

function getTicketPriceAdult() {
    return priceDefault();
}

function getTicketPriceSenior() {
    return priceDefault() - priceDefault() * discountSenior;
}
// END PROMPT SOLUTION