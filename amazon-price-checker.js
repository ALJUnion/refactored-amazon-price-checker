// let itemname = prompt("what is the name of the item?");
// let baseprice = prompt("What is the base price?");
// let bf = prompt("is today Black Friday");
// let searchengine= prompt("Did the purchaser find the product through a search engine?");
// let comparison_shop = prompt("Did purchaser visit a comparison-shopping site?")
// let baseMessage = `Thank you for shopping. your ${itemname} costs $${baseprice}`;


// if (itemname=== "yes"){ 
//     alert("The base price for" + itemname + "is" + baseprice )
// }
// if (bf==="yes"){
//     baseprice=baseprice *0.75;
//     baseMessage=baseMessage + "Since it's Black Friday, we will reduce the price by 25%"
// }



// alert(`${baseMessage} your total is ${baseprice}`);

// REFACTORED section of the amazon price checker


let itemname = prompt("what is the name of the item?");
let baseprice = prompt("What is the base price?");
let bf = prompt("is today Black Friday");
let searchengine= prompt("Did the purchaser find the product through a search engine?");
let comparisonShop = prompt("Did purchaser visit a comparison-shopping site?")
let baseMessage = `Thank you for shopping. your ${itemname} costs $${baseprice}`;

function myFunction(itemname, baseprice, bf, searchengine,comparisonShop, basemessgae){
    if(bf === "yes"){

    }
    console.log(`Congratulations you can save some money on ${itemname} price is ${baseprice}`).to.Uppercase;
}