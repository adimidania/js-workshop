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
