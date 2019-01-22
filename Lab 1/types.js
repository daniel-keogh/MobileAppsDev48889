// Part 4 - Create a TypeScript file that demonstrates the use of types
// Booleans
console.log("Booleans:");
var flag = true;
console.log("Value assigned to flag is " + flag);
// Number
console.log("\nNumbers:");
var decimal = 10;
console.log("Value assigned to decimal is " + decimal);
var hex = 0xf123;
console.log("Value assigned to hex is " + hex);
var binary = 10;
console.log("Value assigned to binary is " + binary);
var octal = 484;
console.log("Value assigned to octal is " + octal);
// String
console.log("\nStrings:");
var colour = "red";
console.log("Colour before is " + colour);
colour = "blue";
console.log("Colour after is " + colour);
var favColour = "My favourite colour is " + colour;
console.log(favColour);
// Array
console.log("\nArrays:");
var list = [12, 34, 7, 22, 9];
for (var i = 0; i < list.length; i++) {
    console.log("Item no. " + (i + 1) + " in list is " + list[i]);
}
// Tuple
console.log("\nTuple:");
var x;
x = ["hello", 10];
console.log(x[0].substr(2));
// Enum
console.log("\nEnum:");
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Green"] = 1] = "Green";
    Colour[Colour["Blue"] = 2] = "Blue";
})(Colour || (Colour = {}));
var c = Colour.Green;
console.log(Colour[c]);
// Any
console.log("\nAny:");
var notSure = "\"some random string\"";
console.log("Value of notSure is: " + notSure);
console.log("Type of notSure is: " + typeof (notSure));
notSure = false;
console.log("Value of notSure is: " + notSure);
console.log("Type of notSure is: " + typeof (notSure));
// Any Array
var anyList = ["\"this is a string\"", true, 1234];
console.log("\nElements of Any array:");
for (var i = 0; i < anyList.length; i++) {
    console.log("Element no. " + (i + 1) + " of anyList is " + anyList[i]);
}
