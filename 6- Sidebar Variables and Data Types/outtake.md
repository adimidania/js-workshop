# Summary

- A variable is simply a container.
- The `var` statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value. For example `var x=1, y=2, z="blue"`.
- Since the `var` declares a globally-scoped variable, let's say `x`, this variable can be modified from a function, check `script.js` to get a better understanding.
- On the other hand, the `let` statement declares a block-scoped local variable. This will allow us to get rid of the scope issue that we had with var.
- When we try to call a locally-scoped variable outside of its scope, we run into an error (same thing with `var` by the way).
- Keep in mind that when we run into an error, JavaScript stops rendering, so everything that comes after the ligne that caused an error won't be executed!
- When should we use `let`? we use `let` when we want to declare a variable that is mutable and changeable. We usually don't use `var` unless we have to declare.
- With the keyword `const` we can declare a constant. A constant is a block-scoped local variable that have a fixed value and can't be change.
- JavaScript is a weakly typed language meaning you don't have to declare what type of data goes into your variables you just fill the variable with whatever data you want and then JavaScript will identify or at least try to identify that data type for you. Check `DataTypes.js` to get a better understanding.
- To check the data type of a variable `x`, we can simply use the keyword `typeof` like so `typeof x`.
- We use the `=` for assignments.
- For comparison, we use `==` to check if two variables, let's say `a` and `b`, has values that look the same (If `a` is an integer with a value of 5, and `b` is a string with a value of `"5"`, the condition will be evaluated to True). So the outtake here, `==` doesn't care about the data type.
- We can do an absolute equivalence test by adding an extra equal symbol `===`. Now we have three equal symbols. This looks for absolute equality. `a` and `b` have to be EXACTLY the same.
