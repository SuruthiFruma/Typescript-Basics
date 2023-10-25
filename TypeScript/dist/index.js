"use strict";
console.log("Hello World");
let age = 24;
let my_name = "Shruthi";
let is_published = true;
let some_value;
some_value = "abc";
let any_value = "anyvalue here";
const num_array = [1, 2, 3, 4, 5];
console.log(num_array);
const string_array = ["ABC", "DEF", "GHIJ"];
console.log(string_array);
const tuple_list = [1, "fruma", true];
console.log(tuple_list);
const MySize = 2;
console.log(MySize);
const calculateTax = (income, taxYear) => {
    if (taxYear > 2022) {
        return income = income * 1.5;
    }
    return income = income * 1.3;
};
let myIncome = calculateTax(1000000, 2023);
console.log("My Income is ", myIncome);
let my_info = {
    personName: "fruma",
    age: 24,
    occupation: "SDE"
};
console.log("My info obj is", my_info);
const myFunction = (param) => {
    if (typeof param === 'number') {
        return param * 5;
    }
    return parseInt(param) * 10;
};
let ansByNum = myFunction(5);
console.log("Union Type for Number", ansByNum);
let ansByStr = myFunction("5");
console.log("Union Type for String", ansByStr);
//# sourceMappingURL=index.js.map