// Part 4 - Create a TypeScript file that demonstrates the use of types

// Booleans
console.log("Booleans:");
let flag: boolean = true;
console.log("Value assigned to flag is "+flag);

// Number
console.log("\nNumbers:");
let decimal: number = 10;
console.log("Value assigned to decimal is "+decimal);
let hex: number = 0xf123;
console.log("Value assigned to hex is " +hex);
let binary: number = 0b1010;
console.log("Value assigned to binary is "+binary);
let octal: number = 0o744;
console.log("Value assigned to octal is "+octal);

// String
console.log("\nStrings:");
let colour: string = "red";
console.log("Colour before is "+colour);
colour = "blue";
console.log("Colour after is "+colour);

let favColour: string = `My favourite colour is ${ colour }`
console.log(favColour);

// Array
console.log("\nArrays:");
let list: number[] = [12, 34, 7, 22, 9];
for (let i: number = 0; i < list.length; i++)
{
    console.log("Item no. "+ (i + 1) +" in list is "+ list[i]);
}

// Tuple
console.log("\nTuple:");
let x: [string, number];

x = ["hello", 10];
console.log(x[0].substr(2));

// Enum
console.log("\nEnum:");
enum Colour {Red, Green, Blue}
let c: Colour = Colour.Green;
console.log(Colour[c]);

// Any
console.log("\nAny:");
let notSure: any = "\"some random string\"";
console.log("Value of notSure is: "+notSure);
console.log("Type of notSure is: "+typeof(notSure));
notSure = false;
console.log("Value of notSure is: "+notSure);
console.log("Type of notSure is: "+typeof(notSure));

// Any Array
let anyList: any[] = ["\"this is a string\"", true, 1234];
console.log("\nElements of Any array:")
for (let i: number = 0; i < anyList.length; i++)
{
    console.log("Element no. "+ (i + 1) +" of anyList is "+ anyList[i]);
}