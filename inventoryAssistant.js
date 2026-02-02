let itemName = "Soccer Ball";
const unitCost = 20
let currentStock = 50;
const reorderLevel = 25;
let targetStock = 75;
let weeklyDemand = 35;
let supplierLeadTimeWeeks = 2;

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

console.log("Item Name: ", itemName);
console.log("Weeks of cover: " + weeksOfCover.toFixed(2))
console.log("Reorder now?", reorderNow);
console.log("Recommended reorder quantity: ", reorderQuantity);
console.log("Estimated reorder cost: $" + estimatedReorderCost.toFixed(2));