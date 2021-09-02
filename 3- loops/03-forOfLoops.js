/*
FOR OF LOOPS
*/

//of requires that your 'thing' you are looping through be iterbale--that means it needs to be numbered

// let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

// for (item of student){
//     console.log(item);
// }

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray) {
    console.log(cat, 'say meow');
}