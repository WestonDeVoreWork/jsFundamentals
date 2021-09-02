/*
ARRAYS
*/

function br() {
    console.log("----------------------------------------------------------------");
}

//what is an array?
//has [square brackets]
//can hold multiple datatypes
//arrays can list datatypes in an ordered, numbered way

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:    0         1          2      3     4    5          6
console.log(typeof students); //typeof doesn't tell me my variable is an array -> object
console.log(students instanceof Array); //instanceof tells me my array is an array
console.log(students[2]);
console.log(students[1]);
console.log(students[6]);

let name = students[6][1];
console.log(`Helllo ${name}, you look nice today.`);

br();

//recall for-of loop -> gives the values of the array
let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

/*
for (f of food) {
    console.log(`${f} is amazing!`);6
}

//array methods
food.push('Pizza'); //added to the end of the array
console.log(food);
food.splice(1, 1, 'Bananas');
console.log(food);
food.splice(2, 0, 'Sweet Potato Pie'); //asks for an insertion point, how many things to remove, then
//the item or items to add
console.log(food);
food.pop(); //removes the last element of an array
console.log(food);

br();
food =  food.slice(2,4); //The first number is the first element to sice from the the array, whiile the second number is the stop position (not to be included)
console.log(food);
*/



//forEach allows us to iterate with loops specifically, and we can directly grab both the elements
//and their index numbers
// food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}`);
})

let movies = ['300', 'Snow White','The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
console.log(movies);
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
console.log(movies);

br();

movies.forEach(movie => console.log(movie));
console.log(`Number of Movies: ${movies.length}`);

br();

//Let's do the following with an array:
//we will check if we are a working awith an array
//flip the values within the array (what was in index 4 is now in 0,3 to 1, etc.)
//using a method only, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array) {
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}