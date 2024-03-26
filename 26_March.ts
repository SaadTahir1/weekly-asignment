// Functions and Return

// making function
function fruit() {
    console.log("Apple is sweet\n");
    
}
// calling function
fruit();


// function with parameters
function fruits(fruit1: string, fruit2: string) {
    console.log(` i Love to eat ${fruit1} in summer and ${fruit2} in a winter!\n `)
}
fruits("Mangoes", "Grapes");

// function with return type
function milkshake() {
    let making = 200 + 40 + 160
    return making;
}
console.log(milkshake()) ;

// function with return type and parameters

function milkshake1(milk: number, sugar: number, water: number) {
    console.log(`\ni am making a milkshake with ${milk}ml milk, ${sugar}g sugar and ${water}ml water`)
    let making = milk + sugar + water
    return making
    
}
let a = milkshake1(200, 160, 85) ;
console.log(`\ntotal weightage required to make milkshake is ${a}g`) ;
