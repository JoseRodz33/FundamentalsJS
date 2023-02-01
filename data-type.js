// ? JavaScript
/* 
    JS was founded in 1996 By Brandon Eich
    * Client-side Language ( runs in the browser )
    * interpreted language, not compiled
    * first-class-function - functions are treated like any other variable
    * function language 
    * object-oriented language
    * prototype-based
    * imperative
    * ECMAScript - organization setting language standards
*/

// ? Comments

/* Blocks of code that are not being interpreted
    * Denoted by // for single-line
    *Denoted by /* for multi-line
    * Comments are read but not executed
    * As students, it helps us with note tacking
    * As devs, it documments our code making it

*/

// ? Console Objects

    /* 
        *Gives us access to the browser or note's debugging console.
        * Allows developer to view output from their program
            
    */
    // 2 + 2  runs but doesnt show in the console 




// ? Data Type
// ? JS Data Types:
// Primitive
//     * string
//     * number
//     * boolean
//     * null
//     * undefined
//     * Not a Number (NaN)
// Reference
//     * array
//     * object




// ? Strings

/*  *primitive data type represennting characters (text)
    * Enclosed ' ', " ", or ` `

    Examples:
*/

console.log("This is a Text")
console.log('This is also a text')
console.log(`Text using strings interpolation backticks`)

/* We can add (concatenate) Strings 
 */
console.log("I'm Paul" + " and I'm 26 years old.")

/* Strings are indexed starting from zero (8) 
    * index_value goes between [ ]
    *strings are immutable (cant add a letter to a string)
*/
console.log("Porschedoppelkupplungsgettrieb"[5])

// ? String Interpolation (` `)
//  * A process of including space for an expression
//  Syntax: ` String ${ expression }

console.log(`My name is Jose and I am ${ 20 + 6 } years old`)

/* 
    ? String Method
    .length
    .slice()
    .toUppercase()
    .toLowerCase
*/

console.log("-----------------")
console.log("Niemczyck")



// ?  Checking data types using type of operator


//  returns string
console.log(typeof "1990")  

//  multi-line strings
// Done using escape characters "\n"
console.log("Paul Niemczyk \n 123 Main St \n 312 555 0808")

//  any integer or decimal

console.log(25)
console.log(3.14)
console.log(typeof 1776)
console.log(0.2 + 0.1) // returns 0.300...04


/*
    *Bianary Value
    *Either true (on) or False (off)
    *Examples of Falsey values
        * 0
        * undefined
        * null
        * NaN

*/

console.log(true)
console.log(false)
console.log(2 == 2) // returns true
console.log(2 == 5) // returns false


// Boolean() onterface returns whether value is truthy or falsey
console.log(Boolean(1)) // returns true
console.log(Boolean(0)) // returns false
console.log(Boolean(null)) // returns false
console.log(Boolean(undefined)) // returns false
console.log(Boolean("")) // returns false

// ? Type coercion

/*
    * JavaScript is a weekly-typed programming language
    * Doesn't requiere data type definition
    * comparison operator (==) performs type coercion before resolving expression
    * We can use strict equality (===) to avoid type coercion

*/
console.log(2 == "2") // returns true ("22")

console.log(2 === "2") //returns false

// ? Null and Undefined

/* 
    * Null - explains the lack of existence
    * Undefined - explains the lack of value
*/

// ? Operators

/* 
    * Addition (+)
    * Substraction (-)
    * Division (/)
    * Exponent (**)
    * Assignment (=) Single ( 2 + 2 is 4)
    * Comparison (==) Double
    * Strict Comparison (===) Triple
    * Dot (.)
    * Modulo (%) more on it later
*/

//? Expressions

/*
    * Unprocessed values grouped using the ( )
    * Evaluated to be truthy or falsey
    * can be empty
    * ex. of expression (2 + "2")
*/

//? Statements

/*  

    * Keyword 
    * expression
    * and code block
    * statements evaluate and execute code block when invoked 

*/

//? Modulo (%)

/* 
    * checks for remainder of long division

*/

console.log(12 % 3) // returns 0
console.log(12 % 5) // returns 2