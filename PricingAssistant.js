let productName = "Droot's Donuts"; //Product name is droot's donuts
const costPerUnit = 1.59;
const basePrice = 2.59;
const discountRate = 0.1;
const salesTaxRate = 0.08;
const fixedMonthlyCosts = 340;

let discountedPrice = basePrice *(1-discountRate);
let finalPriceWithTax = discountedPrice* (1+salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("Product Name: ", productName);
console.log("Discounted Tax: ", discountedPrice);
console.log("Final Price with Tax: ", finalPriceWithTax);
console.log("Profit per unit: ", profitPerUnit);
console.log("Break-Even units: ", breakEvenUnits);
console.log("Per-unit profitability: ", isProfitablePerUnit);