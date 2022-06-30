# Summary

## Objects

- JavaScript is a prototype based object oriented programming language. That means, each object is a unique instance of an object prototype.
- Each object has properties and methods.
- An object can contain other objects.
- When we declare an object as a `const`, we can't assign to it another value, like an other object or an integer. However, we still can change the values of the properties.
- We can access object's properties either by using the dot notation `object.property`, or the bracket notation `object["property"]`.
- We usually work with the dot notation. However, the bracket notation allows us to do more things. First of all, we can pass a variable inside the brackets `object["variable"]`, of course this variable must contain a string that define a property that already exists within our object. Second of all, we can access property names than contain digits at the begining or hyphens `object["first-name"]`. We can't achieve that using the dot notation.
- You can change the value of the property to anything you like, string, number, boolean etc.
- A class is a template for our object.
- Check `Backpack.js` and `BackpackFunction.js` to see different ways of declaring a class.
- JavaScript comes with a set of global objects that we can use directly without having to declare them over again (ex: Date). They are all documented in the MDN documentation.
- The date object can take pretty much any string that represent a date and turn into something meaningful so we can perform some calculations on it (`cont date = new Date(string)`).
- `const rightNow = new Date()`, when I console log `rightNow`, I will get a pretty long string with the day and the time, I can use the method `toDateString()` on the object `rightNow` If I want to shorten the date (DD-MM-YY).
- We can create objects directly without having to create a class first `const myObject = { color: "pink" };`.

## Quiz

- Q1: Can an object created from a class be given the same name as the class?
- A1: No, If the class is a constant, this will cause an error. If the class is not a constant, the new object will overwrite the class.
- Q2: What is the difference between a function and a method?
- A2: A function is a stand-alone function. A method is a function within an object.
- Q3: Can you use arrow functions to create object methods?
- A3: No, object methods must be declared using function expressions or the method definition shorthand.
- Q4: What does the `this` keyword refer to in a class?
- A4: `this` refers to the current object created from the class.
