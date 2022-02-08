// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Bryanna Flaherty" // HINT: Replace this with your own name!
// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let quantity = 0;
// selecting the element with an id of credit
const credit = document.querySelector('#credit')


function updateGb(displayQuantity){
    let gbQty = document.querySelector('#qty-gb');
    gbQty.textContent = displayQuantity;

}
function updateCc(displayQuantity){
    let ccQty = document.querySelector('#qty-cc');
    ccQty.textContent = displayQuantity;    
}
function updateSugar(displayQuantity){
    let sugarQty = document.querySelector('#qty-sugar');
    sugarQty.textContent = displayQuantity; 
}
function updateTotal(displayQuantity){
    let totalCookies = document.querySelector('#qty-total');
    totalCookies.textContent = displayQuantity;
}
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb');
const gbMinusBtn = document.querySelector('#minus-gb');
const ccPlusBtn = document.querySelector('#add-cc');
const ccMinusBtn = document.querySelector('#minus-cc');
const sugarPlusBtn = document.querySelector('#add-sugar');
const sugarMinusBtn = document.querySelector('#minus-sugar');
gbPlusBtn.addEventListener('click',function(e){
    if (gb >= 0) {
        gb++;
        updateGb(gb);
       (quantity >= 0)
        quantity++;
        updateTotal(quantity);
    }
})
gbMinusBtn.addEventListener('click',function(e){
    if (gb > 0) {
        gb--;
        updateGb(gb);
        (quantity > 0)
        quantity--;
        updateTotal(quantity);
    }
})
ccPlusBtn.addEventListener('click',function(e){
    if (cc>= 0) {
        cc++;
        updateCc(cc);
        (quantity >= 0)
        quantity++;
        updateTotal(quantity);
    }
})
ccMinusBtn.addEventListener('click',function(e){
    if (cc> 0) {
        cc--;
        updateCc(cc);
        (quantity > 0)
        quantity--;
        updateTotal(quantity);
    }
})
sugarPlusBtn.addEventListener('click',function(e){
    if (sugar>= 0) {
        sugar++;
        updateSugar(sugar);
        (quantity >= 0)
        quantity++;
        updateTotal(quantity);
    }
})
sugarMinusBtn.addEventListener('click',function(e){
    if (sugar> 0) {
        sugar--;
        updateSugar(sugar);
        (quantity > 0)
        quantity--;
        updateTotal(quantity);
    }
})
// Code to update name display
credit.textContent = `Created by ${yourName}`
// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
console.log('Gingerbread + button was clicked!')
})
gbMinusBtn.addEventListener('click', function() {
    console.log('Gingerbread - button was clicked!')
})
ccPlusBtn.addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked!')
})
ccMinusBtn.addEventListener('click', function() {
    console.log('Chocolate Chip - button was clicked!')
})
sugarPlusBtn.addEventListener('click', function() {
    console.log('Sugar + button was clicked!')
})
sugarMinusBtn.addEventListener('click', function() {
    console.log('Sugar - button was clicked!')
})
// HINT: You can delete this console.log after you no longer need it!
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
// TODO: Hook up event listeners for the rest of the buttons