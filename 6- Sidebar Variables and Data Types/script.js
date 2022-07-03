/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

let color = "purple";
// This will display purple
console.log(color);

function headingColorVar() {
  color = "blue";
  var item = "box";
  console.log("Inside function " + color);
}

function headingColorLet() {
  let color = "yellow";
  console.log("Inside function " + color);
}

headingColorVar();
headingColorLet();
// This will display blue
console.log(color);
// And since var is function-scoped, we can't access item from here
// This will cause an error
// console.log(item);
