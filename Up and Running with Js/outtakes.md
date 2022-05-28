# Summary

## Inline JavaScript

- You can put your script element inside the body, in the head section or right after the body. But keep in mind, the browsers renders the HTML file from top to bottom.
- In the external.html file, we can't place the script tag in the head, we will run into an error because the browser won't recognize the body tag when encountering `document.body.appendChild(main);` So we had to place it right after the body tag. You need to keep in mind that this is a **hack**, not a **solution**, and in more complex projects, you might be running into some problems (you might be obliged to split your JavaScript file in two because there's a part that needs to be runned at the beginning of the rendering etc). The solution to this problem comes with "Modern JavaScript Loading).

## Modern JavaScript Loading

- Default
  <img src="/Assets/default.png" width="200" height="auto" />
- Async
  <img src="/Assets/async.png" width="200" height="auto" />
- Defer
  <img src="/Assets/defer.png" width="200" height="auto" />

## Remark

- Nowadays, we are not putting the script at the end of the HTML file, It's an old fashion, we are always putting it in the head section, using async or defer.
