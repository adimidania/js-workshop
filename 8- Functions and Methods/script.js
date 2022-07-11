/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

/**
 * Function declarations are hoisted globally, this means that once
 * declared, we can access them from pretty much everywhere. Even before Its
 * declaration.
 */
function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

/**
 * Function experssions on the other hand are not hoisted, we access them in
 * the scope where they were declared. Keep mind that this is the trendy way of declaring
 * a function. Especially with JavaScript frameworks.
 */

const doMoreMath = function (a = 3, b = 2) {
  let c = a * b;
  return c;
};

console.log("Do some math:", doSomeMath(5, 6));
console.log("Do more math:", doMoreMath(5, 6));
// This will return to us the code of doMoreMath.
console.log("Do more math:", doMoreMath);

// Immediately Invoked Function Expression (IIFE)
// This function will be executed as soon as the browser encouters it.
// (function () {
//   let a = 4;
//   let b = 6;
//   let c = doSomeMath(a, b);
//   console.log(`The sum of a and b is: ${c}`);
// })();

/**
 * Arrow functions. Keep mind that arrow functions aren't hoisted, we can call them only
 * after their declaration. Also, Arrow functions don't work inside objects.
 */

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

const addPack = (currentPack) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;
  return newArticle;
};
