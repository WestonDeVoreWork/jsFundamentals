/*
SCOPE
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope
*/

function br() {
    console.log("---------------")
}

//example 1
var x = 12; //GLOBAL SCOPE

function scope() {
    var x = 33; //LOCAL SCOPE
    var y = 10;
    console.log(x);
}

scope(); //logs 33
console.log(x); //logs 12
// console.log(y);

br();

// example 2
var x = 12;

function scope() {
    x = 33;
    console.log(x);
}

scope();  //33
console.log(x);  //33

br();

//example 3:
var x = 1;

function scope() {
    var x = 2;
    function scope() {
        var x = 3;
        console.log(x); //3
    }
    scope();
    console.log(x); //2
}
scope ();
console.log(x); //1

br();

//example 4 contrasts with 5:
var x = 12;

function scope() {
    var x = 33;
    if (true) {
        let x = 45;
        console.log(x); //45
    }
    console.log(x); //33
}
scope();
console.log(x); //12

br();

//example 5 contrasts with 4:
var x = 12;

function scope(){
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x); //45
    }
    console.log(x); //45 --> var doesn't obey 'block' scope
}
scope();
console.log(x); //12