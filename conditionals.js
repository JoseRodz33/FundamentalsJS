//? Conditionals & Logic Gates

/*
* Conditional statements check if an expression is truthy
* The expression must always resolve to true
* If it's truthy, a code within a statement execute
* If an expression is false, nothing happens unless we specify otherwise

*/

// ? Falsey Values

/* 
    Falsey value is one that is considered false in Boolean context

    If JS expects false boolean, it can return the following:
    * false
    * 0
    * "", '', ``
    * undefined
    * null
    * NaN
*/

/* 
    ? If Statement
    * checks if something is true and execute code
*/

let lightSwitch = "on"

if (lightSwitch) { 
    console.log("The light is on")
}

/* 
    ? Else if Statement
    *Allows us to do add additional condition if the prior on has not been satisfied
*/
/* 
    ? Else statement
    * If all else fails, execute this code
*/

let temp = 50

if (temp >= 50) {
    console.log("It's nice out")
} else if (temp < 50 && temp > 32) { 
    console.log("Temp is really getting' down")
} else if (temp <= 32) {
    console.log("Watch out for ice!")
} else {
    console.log(`${temp} is not a valid temperature range`)
}

/* 
    ? SYNTAX:
    * if (conditionIsTrue)
*/


/* 
    ? Logical Operators NOT AND OR
    * OR operator ( || )
        * true if one of the conditions is true
        *  ex: I will be happy if I go to the movies or eat dinner 
        * (dinner & movies = true)
        * (no dinner & movies = true)
        * (dinner & no movie = true)
        * (no dinner & no movie = false)
    * AND Operator ( && )
        * true if both conditions are true
        * ex: I will be happy if I got to the movies and eat dinner 
        * (dinner and movies = true)
        * (no dinner and movies = false)
        * (dinner and no movies = false)
    * NOT operator ( ! )
        * Flips the logical expression
*/

// AND Example

lightSwitch = false ; {
    // (lightSwitch == false)
    //(!lightSwitch)
    //(lightSwitch /= true)
    // All of the above mean the same thing
    console.log("Light switch is off")
}

    // AND Examples
let home = true
lightSwitch = false

if (home && lightSwitch) {
    // (home == true && lightSwitch == true)
    console.log("You're home and the lights are on")
} else if (home && !lightSwitch) {
    // (home == true && lightSwitch == false)
    console.log("You forgot to turn on the lights")
} else if (!home && lightSwitch) {
    // (home == false && lightSwitch == true)
    console.log("You forgot to turn off the lights")
} else {
    console.log("Home is empty and lights are off")
}

// OR Example

if (!home || !lightSwitch) {
    console.log(`Home value is: ${home} and Light Switch value is: ${lightSwitch}`)
}

let age = 21
let gender = "female"


if (age < 16 ) {
    console.log("They Can't Drive")
} else if (age < 18 && age >= 16) {
    if (gender === "male") {
        console.log("If 16 thru 18, and they're male their insurance is highest")
    } else if (gender === "female") {
        console.log("Your insurance is high")
    }
    
} else if (age >= 18 && age <21 && gender === "male") {
    console.log("Your insurance is average")
} else if (age >= 21) {
    console.log("You got good rates")
}

// ? Ternaries

/* 
    A quick way of creating an if/else conditional

*/

let ignition = true
// true for "on" false for "off"

if (ignition) {
    console.log("The car is on")

} else {
    console.log("the car is off")
}

ignition ? console.log("The car is on") : console.log("Car is off")

// Chainning Ternaries

let season = 1

if (season ==1) {
    console.log("spring")
} else if (season == 2) {
    console.log("summer")
} else if (season == 3) {
    console.log("autumn")
} else if (season == 4) {
    console.log("winter")
} else {
    console.log(`${season} is not an appropriate input`)
}

season == 1 ? console.log("spring")
            : season == 2 ? console.log("summer")
            : season == 3 ? console.log("autumn")
            : season == 4 ? console.log("winter")
            : null

// ! If you do not have an else statement, you must use a null.



/* 
    Ternary Syntax:

    Conditional ? code block if true : code block if false
*/

//? Ternary Challenge

age = 18;

age < 18 ? console.log("You're still a teenager")
            : age < 21 ? console.log("You can travel but not drink")
            : age >= 21 ? console.log("You can drink")
            : null


//? Switch Statements

/* 
    Switches execute a block of code dependent upon a different case

    We ask a question that requieres a specific response determined by our answer
*/

let uprightInstructor = "Benny"

switch(uprightInstructor) {
    case "Paul":
        console.log(`${uprightInstructor} is a Lead SD Instructor`)
        break
    case "Rob":
        console.log(`${uprightInstructor} is on vacation.`)
        break
    case "Matt":
        console.log(`${uprightInstructor} is an Operations Manager`)
        break
    default:
        console.log(`${uprightInstructor} may or may not work here.`)
                
}