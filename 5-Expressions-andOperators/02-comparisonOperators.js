/*
One of the most useful finctions of any coding langauge is the ability to compare two or more values and return whether or not they are equal. Almost every conditional statement you write will make use of these comparison operators.

In JavaScript, data-type does not usually matter when comparing two values. Unless specifically stated otherwise, the values are converted to the same type at the time of comparison.
*/

//Equal == returns "true" if the values are equal, regardless of data-type
//Not Equal != returns "true" if the values are not equal, regardless of data-type
//Strict Qual === returns "true" ONLY if the values are equal AND the same sata-type
//Strict Not Equal !== returns "true" if the values are not equal OR not the same data-type
//Greater than > returns "true" if value A is larger than value B
//Greater than or equal >= returns "true" if value A is larger or the same as value B
//Less than < returns "true" if value A is smaller than value B
//Less than or equal <= returns "true" if value A is smaller or the same as value B
//AND || returns "true" if either value/condition A OR value/condition B are true

/*
Example
-------------------------------------------------------------------------------------
*/

let a = 14
let b = 17
let c = 13

if (a <= b) {
    console.log((a-b)*-1)
}

if (b > a) {
    console.log(b-a)
}

if (c < a < b) {
    console.log('This Works!')
}