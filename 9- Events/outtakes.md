# Summary

- Everything that happens in the browser is an event. Opening the browser is an event, visiting a URL is an event, moving your mouse or clicking it or touching your screen is an event, scrolling is an event, clicking the back and forth buttons in the browser or reloading the document or hitting a key on your keyboard, anything and everything that happens in the browser is an event. And with JavaScript, we can listen for those events then capture them when they happen and do stuff when they are triggered.

- Everything that happens in the browser is an event and you can monitor any of those events by adding an event listener and listening for them. Event listeners can be appended to any element inside the window and inside the DOM and you can trigger whatever function you want either using an anonymous function inside the event listener or by using a callback. And if you use a callback or an anonymous function, you can grab the event object and do something with that event object if that is meaningful in the current context.

- When using `addEventListener` we need to keep in mind that when we pass an arrow function we can't use the keyword `this` (in order to reffer to the element that we're adding an event listener to), however, when we use a function declaration we can do that.

- Arrow functions do not have their own this, so they refer to the closest defined this which is the window object.

- Note that the passing of the event object is done automatically, whether we explicitely pass it or not.

- Pass arguments through event listener is a very crucial video that I need to look up one more time.

- When we submit a form, It always tries to reload the page, that's why when we add EventListener to a submit button, we add `e.preventDefault()`. In order to prevent the page from reloading.
