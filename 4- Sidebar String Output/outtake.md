# Summary

- We can use JavaScript to manipulate the HTML and CSS and get them to do what we want.
- Keep in mind that our webpage is an object called document, we can do the following commands:

  - `document.body.innerHTML`.
  - `document.body.innerHTML = "Hello World"`.

- Using `` tells the browser that everything that It's inside wrapped by the backticks is a template literal, meaning we can mix HTML and strings with JavaScript expressions to literally create templates.
- Keep in mind: `<h1>${you can also call a function and do calculations}</h1>`.
- People usually don't use template literal, instead, they use traditional string output. They do it like so `const content = "<h1>" + backpack.name + "</h1>`.
