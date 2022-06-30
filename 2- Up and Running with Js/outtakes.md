# Summary

## Inline JavaScript

- You can put your script element inside the body, in the head section or right after the body. But keep in mind, the browsers renders the HTML file from top to bottom.
- In the external.html file, we can't place the script tag in the head, we will run into an error because the browser won't recognize the body tag when encountering `document.body.appendChild(main);` So we had to place it right after the body tag. You need to keep in mind that this is a **hack**, not a **solution**, and in more complex projects, you might be running into some problems (you might be obliged to split your JavaScript file in two because there's a part that needs to be runned at the beginning of the rendering etc). The solution to this problem comes with "Modern JavaScript Loading).

## Modern JavaScript Loading

### Default

<img src="/Assets/default.png" width="450" height="auto" />

### Async

  <img src="/Assets/async.png" width="450" height="auto" />

### Defer

  <img src="/Assets/defer.png" width="450" height="auto" />

## Remark

- Nowadays, we are not putting the script at the end of the HTML file, It's an old fashion, we are always putting it in the head section, using async or defer.

## JavaScript Modules

- For a better understanding, check the JavaScript Modules folder. We used the same script.js and we just split it into two Js files for a better clarity!
- Keep in mind, when you add `type=module` to the script tag, you set the loading to defer.
- Unfortunately modules only work via HTTP(s), so all you need to do is use a local web server. You can't display the result without using Live Server or another alternative.
- Usually, we put classes in modules, not objects.

## Quiz

- Q1: When does the browser execute JavaScript?
- A1: By default: When the script is encountered. If the script is set to "async", when the script is fully loaded. If the script is set to "defer", when the entire HTML page is rendered.
- Q2: What happens when you defer JavaScript?
- A2: The browser loads the JavaScript asynchronously when it is encountered, then waits until all HTML is rendered before executing the script.
- Q3: JavaScript modules are heavily used in frameworks like React and Vue. What is the advantage of using modules?
- A3: Modules enable modularization of code where individual functions, components, data objects, and other parts can be separated into individual files
