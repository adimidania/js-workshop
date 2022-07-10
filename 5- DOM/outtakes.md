# Summary

- When we present a web browser with an HTML document, the browser creates an object model for the document, a document object model, or DOM for short, and this DOM describes the hierarchical tree structure for that document, how the different elements in the document relate to each other and are nested.
- `document.querySelector("main li:last-child")` returns the last child li element inside of the main element.
- With the method `querySelector()` we can access elements by their class, or id, just like so: `document.querySelector(".main-content")` and `document.querySelector("#Id")`.
- This method returns the first encountered element. If we want to retrieve all the elements, we use `querySelectorAll()` instead. This method returns an array.
- `document.querySelectorAll("main li").forEach(item => item.style.color = "red";`.
- We have two other interesting methods `getElementsByClassName()` and `getElementById()`. These two methods are older than `querySelector()`. For example, If we want to retrieve the elements that have two classes (let's say "navitem link"), we can access them like so `getElementsByClassName("navitem link")`.
- `document.querySelector("main").className` will return the classes that the main tag has. We can change the current class (If we have one class), by doing like so: `document.querySelector("main").className = "show";`. We have to be carefull using `className`, and this due to two reasons, first, if the main tag has several classes, we can't just assign a class like we did above, this will result a problem, second, className actually has another signification working with Frameworks such as React.js, that's why we should be so carefull using it. And that's why `classList` came into play.
- `document.querySelector("main").classList` will return a collection that contains all the classes of the main element. This property comes with a lot of interesting methods, Let's explore some of those methods:
  - `document.querySelector("main").classList.add("new-class");`
  - `document.querySelector("main").classList.remove("new-class");`
  - `document.querySelector("main").classList.toggle("new-class");`
  - `document.querySelector("main").classList.replace("old-class", "new-class");`
- `document.querySelector("main").attributes` returns the attributes that the main tag has (src, alt, class, id etc). The result is is a NamedNodeMap not an array.
- We also have another interesting method to check whether an element has a certain attribute or not (It returns True or False). `document.querySelector("main").hasAttribute("src");`.
- To get the value of a certain attribute: `document.querySelector("main").getAttribute("src");`.
- We also can set the value of a certain attribute: `document.querySelector("main").setAttribute("alt", "avatar");`.
- We can also remove an attribute: `document.querySelector("main").removeAttribute("alt");`.
- `document.querySelector("main").style` will return CSSStyleDeclaration, which is an object that contains all the inline style applied to a certain element. With that being said, we can change the value of certain property, let's see an example:
  - `document.querySelector("main").style.color = "red";`. It's recommended to set each CSS property alone like we did here in order to have more control.
- `const child = document.createElement("div");` will actually create a div element, but this div element isn't placed in our document. It's just being created.
- Now that the element is created, we can add it to a parent: `parent.append(child)`. This method will add the element that we just created at the end.
  - `parent.prepend(child)` to add the child element as the first child of the parent element.
  - `parent.appendChild(child)` does the same thing as `parent.append(child)`. The only difference is that it returns the child back.
  - `parent.replace()` does replace an old child with a brand new one.
  - `parent.insertBefore()` allows us to insert an element right before the parent.

## Quiz

- Q1: What is the difference in the return from the element.className and element.classList properties?
- A1: element.className returns a string containing all classes appended to the element. element.classList returns a DOMTokenList with each class appended to the element.
