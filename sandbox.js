let array0 = ["foo", "bar", "fizz", "buzz"];
let array1 = ["foo", , "fizz", "buzz"];
let object0 = {
  key0: "foo",
  key1: "bar",
  key2: "fizz",
  key3: "buzz"
};

console.log("<----------------------- Array ---------------------->");
console.log("\n");
console.log("******************************************************");
console.log("for..in Array.prototype");
console.log("------------------------------------------------------");
console.log("\n");
for (let element in array0) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..of Array.prototype");
console.log("------------------------------------------------------");
console.log("\n");
for (let element of array0) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..in Array.prototype.keys()");
console.log("------------------------------------------------------");
console.log("\n");
for (let element in array0.keys()) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..of Array.prototype.keys()");
console.log("------------------------------------------------------");
console.log("\n");
for (let element of array0.keys()) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..in Object.keys(Array.prototype)");
console.log("------------------------------------------------------");
console.log("\n");
for (let element in Object.keys(array0)) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..of Object.keys(Array.prototype)");
console.log("------------------------------------------------------");
console.log("\n");
for (let element of Object.keys(array0)) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..in Array.prototype.keys() (with holes)");
console.log("------------------------------------------------------");
console.log("\n");
for (let element in array1.keys()) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..of Array.prototype.keys() (with holes)");
console.log("------------------------------------------------------");
console.log("\n");
for (let element of array1.keys()) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..in Object.keys(Array.prototype) (with holes)");
console.log("------------------------------------------------------");
console.log("\n");
for (let element in Object.keys(array1)) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..of Object.keys(Array.prototype) (with holes)");
console.log("------------------------------------------------------");
console.log("\n");
for (let element of Object.keys(array1)) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("\n");
console.log("<---------------------- Object ---------------------->");
console.log("\n");
console.log("******************************************************");
console.log("for..in Object.prototype");
console.log("------------------------------------------------------");
console.log("\n");
for (let element in object0) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..of Object.prototype");
console.log("------------------------------------------------------");
console.log("\n");
// TypeError: object0 is not iterable
//
// for (let element of object0) {
//   console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
// }
console.log("\n");
console.log("******************************************************");
console.log("for..in Object.keys(Object.prototype)");
console.log("------------------------------------------------------");
console.log("\n");
for (let element in Object.keys(object0)) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..of Object.keys(Object.prototype)");
console.log("------------------------------------------------------");
console.log("\n");
for (let element of Object.keys(object0)) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("\n");
console.log("******************************************************");
console.log("for..in Object.values(Object.prototype)");
console.log("------------------------------------------------------");
console.log("\n");
for (let element in Object.values(object0)) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..of Object.values(Object.prototype)");
console.log("------------------------------------------------------");
console.log("\n");
for (let element of Object.values(object0)) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..in Object.entries(Object.prototype)");
console.log("------------------------------------------------------");
console.log("\n");
for (let element in Object.entries(object0)) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");
console.log("for..of Object.entries(Object.prototype)");
console.log("------------------------------------------------------");
console.log("\n");
for (let element of Object.entries(object0)) {
  console.log(`ELEMENT VALUE: ${element}, ELEMENT TYPE: ${typeof(element)}`);
}
console.log("\n");
console.log("******************************************************");