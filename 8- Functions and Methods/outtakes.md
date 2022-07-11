# Summary

- The term function is typically used to refer to as a function that sits on itself whereas a method is a function that sits inside an object and acts on that object. They're effectively the same thing, they just appear in different contexts.
- Arrow functions are a short way of declaring functions. You can check `script.js` for a better insight.
- Why do we use callback? Well, there's a simple reason. There's a good chance when you set up some more complex code that you may have different callback functions you want to use for different purposes. So in this particular circumstance we want to use the printHTML function but there could be several different versions of the printHTML function and then you want to use them for different purposes and by calling a callback like this, you can pass in exactly the function you want into the other function. So we're effectively saying here is the precise function I want you to use once you're done processing your information right now but later it could be a different function. Check `Callback.js` for a better understanding.
- `console.log(booleanVar? "Print if True" : "Print if False");`.
- `&&` for AND, `||` for OR.
- The `map` method allows us to go through an array, do something with its elements, and return that into a brand new array.
