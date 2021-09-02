/*
FOR IN LOOPOS
*/

//in does not require that the thing you loop through be numbered

let student = {name: 'Peter', awesome: true, degress: 'javascript', week: 1};

for (item in student) {
    console.log(item);
    console.log(student[item])
}

let br = "---------------"

console.log(br)

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

console.log(br)

//let's write a for-in loops that capitalizes the first letter of a name

let instructor = 'pAuL';
let capName;

for (n in instructor){
    if (n == 0) {
        capName = instructor[n].toUpperCase();
    } 
    else {
        capName += instructor[n].toLowerCase();
    }
}

console.log(capName);