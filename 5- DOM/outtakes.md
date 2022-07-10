# Summary

- When we present a web browser with an HTML document, the browser creates an object model for the document, a document object model, or DOM for short, and this DOM describes the hierarchical tree structure for that document, how the different elements in the document relate to each other and are nested.
- `document.querySelector("main li:last-child")` returns the last child li element inside of the main element.
- With the method `querySelector()` we can access elements by their class, or id, just like so: `document.querySelector(".main-content")` and `document.querySelector("#Id")`.
- This method returns the first encountered element. If we want to retrieve all the elements, we use `querySelectorAll()` instead. This method returns an array.
- `document.querySelector("main li").forEach(item => item.style.color = "red";`.
- We have two other interesting methods `getElementsByClassName()` and `getElementById()`. These two methods are older than `querySelector()`. For example, If we want to retrieve the elements that have two classes (let's say "navitem link"), we can access them like so `getElementsByClassName("navitem link")`.
-
