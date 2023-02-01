//? Loops

/* 
    Allow us to execute a block of code repeatedly unit an exit
    condition has been met.
*/

//? For Loop

/* 
    We set out loop in a way where we can:

        * see where we are in a loop
        * consider the condition we run it against
        * note whem we are done with the condition
*/

// Syntax:

// for (start; stop; step) {
//     code block to execute until stop condition returns false
// } * iterator - (ex: i) value that is a placeholder for our loop
    

for (let i = 0; i <= 10; i++) {
    console.log(i)  
}


// ? Inifinite Loop - lack of stop condition
// for (let i = 0; ;i++) {
//     console.log(i)
// }

let longWordEN = "supercalifragilisticecpipialidocious"
console.log(longWordEN.length)

for (count = 0; count < longWordEN.length; count = count + 1) {
    console.log(`Index: ${count}, Letter: ${longWordEN[count]}`)
}

//? For-in Loop
/* 
    Allows us to seek an index value of an interable against a condition.
    * for-in loops so not require an index number
*/

let longWordDE = "kraftfahrzeug-haftplifchtversicherung"

for (i in longWordDE) {
    console.log("I swear I must not tell lies")
    console.log(longWordDE[i])
}

/* 
    ? For-of Loop
    *Allows us to seek interable value against the condition.
*/

let longWordPL = "konstantynopolitanczykowianeczka"

for (i of longWordPL) {
    console.log(i)
}

/* 
    Different between for-in and for-of in terms of use?
    *for-in allows us to loop over items that are not an arrray
    * For-of only works if an item is indexed like an array or a string
*/

//? Challenge

// for (let i = 4; i <= 4; i--) {
//     if (i > -101) {
// } console.log(i)
    
// }

//? Challenge 

// let animalArray = ["pig", "cat", "mouse", "dog", "bird"]

// if (animalArray =="pig") {
//     console.log("Oink Oink")
// } else if (animalArray == "cat") {
//     console.log("Mwiauuu")
// } else if (animalArray == "mouse") {
//     console.log("cheeseee")
// } else if (animalArray== "dog") {
//     console.log("Woof Woof")
// } else {
//     console.log(`${animalArray} Sorry I dont know that animal`)
// }

let animalArray = ["pig", "cat", "mouse", "dog", "bird"]

for ( i of animalArray ) {
    if (i == "pig") {
    console.log("Oink")
}   else if (i == "cat") {
    console.log("Meow")

}
}
    
//? While Loop

/* 
        * Executes a statement inside of a code block
        * It does so as long as a while condition evaluates to true
*/
        // Syntax

        // while (true) {
        //     do this until false
        // }
    
// while (true) {
//     console.log("Infinite Loop Yo!")
// }

let loopCount = 0
while (loopCount <= 100) {
    console.log(loopCount)
    loopCount++
}

// How to use while to iterate over an iterable

let carArray = ["Honda", "BMW", "Porsche", "Lada", "Maserati"]

let carCount = 0

while (carCount < carArray.length) {
    console.log(carArray[carCount])
    carCount += 1
}

// ? Do While Loop

/* 
    Executes code in the do section while a condition remains true
*/

let doCount = 0

do {
    console.log(carArray[doCount])
    doCount = doCount + 1
} while (doCount < carArray.length)