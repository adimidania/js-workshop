/**
 * Challenge: Build and modify an array
 * 1 - Build an array with 8 items
 * 2 - Remove the last item
 * 3 - Add the last item as the first item on the array
 * 4 - Sort the items by alphabetical order
 * 5 - Use the find() method to find a specific item in the array
 * 6 - Remove the item you found using the find method from the array.
 */

// 1- Creating the array
const deskItems = [
  "Computer",
  "Pen",
  "Calculator",
  "Bottle of Water",
  "Glasses",
  "Notebook",
  "Vitamine C",
  "Lip gloss",
];
console.log(deskItems);

// 2- Removing the last item
let item = deskItems.pop();
console.log(deskItems);

// 3- Adding the last item as the first item on the array
deskItems.unshift(item);
console.log(deskItems);

// 4- Sorting the items (Keep in mind that capitalized letters come before lowercase letters)
deskItems.sort();
console.log(deskItems);

// 5- Finding an item in the array using the function "find"
const foundItem = deskArray.find((item) => item === "Notebook");
console.log("Found item:", foundItem);
