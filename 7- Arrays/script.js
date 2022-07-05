/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];
console.log(collection);
console.log(collection.length);

// Adding a new item with an index of 9 and displaying the results
collection[9] = "Goubba";
console.log(collection);
console.log(collection.length);

// Let's explore some functions
let backpackContents = ["piggy", "headlamp", "pen"];

//join method
console.log(backpackContents.join(" "));

//push method
console.log(backpackContents.push("bannana"));
console.log(backpackContents);

//unshift method
console.log(backpackContents.unshift("cherries"));
console.log(backpackContents);

/**
 * ForEach method, It loops through the array
 * and grabs each item then do something with that item
 */

backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

/**
 * The find function, on the other hand, will return the first item that satisfies
 * the condition
 */

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);

//shift method
console.log(backpackContents.shift());
console.log(backpackContents);

//pop method
console.log(backpackContents.pop());
console.log(backpackContents);
