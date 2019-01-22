// Part 5 - Implement parameter types and return types for a funtion
/* Create  a  function  which  accepts  a  string  parameter,  and  returns  a  count  of  the
number of characters in that string. */
function countChars(s) {
    return s.length;
}
/* Create  a  function  which  accepts  a  string  parameter,  and  returns  a  count  of  the
number of characters in that string,  excluding spaces. */
function countCharsNoSpaces(s) {
    var num = s.replace(/\s+/, "").length;
    return num;
}
/* Combine  both  function  created  in  1  and  2,  into  one  function  which  accepts  an
optional parameter, so character count on input string can include or exclude spaces. */
function countCharsCombined(s, spaces) {
    if (spaces === void 0) { spaces = false; }
    var num;
    if (spaces)
        num = s.replace(/\s/, "").length;
    else
        num = s.length;
    return num;
}
var testString = "Hello, there";
console.log("Test string: " + testString);
console.log("countChars() returns " + countChars(testString));
console.log("countCharsNoSpaces() returns " + countCharsNoSpaces(testString));
console.log("countCharsCombined() returns " + countCharsCombined(testString, true));
