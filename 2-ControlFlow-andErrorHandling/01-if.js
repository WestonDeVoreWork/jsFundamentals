/*
Here's a good memory tip for learning what conditionals means. When you were young and you asked your parents to do something, they'd say: "If you clean your room, then you can drive the Ferrari to Florida for Spring Break." Ok, maybe it wasn't that good, but you get the idea. If you met a certain condition, then something else could happen.

In code we have conditions, and we call these expressions conditionals. In English we have words called subordinate conjunctions, if, when, while and many others. In code we have keywords that mark the start of a conditional phrase. As you may have already deduced, if is one of those keywords.
*/

//Consider what will happen with the following code:
let roomClean = true;
if(roomClean) {
    console.log("I can take the Ferrari out!");
}

/*
1. The above statement is called an if statement.
2. It will only execute if [roomClean] is true.
3. If [roomClean] isn't true, it will simply skip over the code inside the if code block.
*/

/*
Along with that same analogy of asking permission parents, there was often the or else part of it. "You need to clean your room, or else you will be groundeed for [set period of time]."
So you reakky were being given two possible conditions:
                                                1.Room cleaned.
                                                2. Grounded for [set period of time].

We have the same logic in code with if else statements.
*/
//Here's a pretty standard example:

let age = 17;
if (age>=18){
    console.log("You can vote!");
} else{
    console.log("You can't vote");
}



/*
ELSE / IF STATEMENTS:

We can also daisy-chain these stements to one another to create specific outcomes depending on the condition. Consider how many conditionals we can device when it comes to the weather and how many layers we need to gout in those conditions. Is it raining? How cold is it outside? How many inches of snow? We can write out different actions plans depending on those specific conditions.

What if we are getting takeout or placing an order at a resturant and the kitchen does not have our first choice? We can think of back-up options as conditions.


*/

